import AggregateError from 'aggregate-error';
import {find} from 'lodash';
import {emojify} from 'node-emoji';
import {Context, GlobalConfig} from 'semantic-release';
import {getLogger} from '../logger';
import {GithubMilestone} from '../types/github-milestone';
import {BranchInfo} from './types';

const debugLogger = getLogger();

/**
 * Verify github milestones
 *
 * @export
 * @param {GlobalConfig} pluginConfig
 * @param {Context} context
 * @param {GithubMilestone[]} milestones
 */
export async function verifyMilestones(
  pluginConfig: GlobalConfig,
  context: Context,
  milestones: GithubMilestone[],
) {
  const {logger, nextRelease} = context;

  const errors: Error[] = [];
  const branch: BranchInfo = (context as any).branch as BranchInfo;
  const {version: nextReleaseVersion} = nextRelease ?? {};

  console.log(`branch=${JSON.stringify(branch, null, 2)}`);

  debugLogger(`nextRelease = ${JSON.stringify(nextRelease, null, 2)}`);

  /** *
   * Try to find a milestone by comparing it's title to:
   * 1. next release name (with v)
   * 2. next release version (without v)
   * 3. branch name
   * 4. channel name
   */

  let milestone: GithubMilestone | undefined;

  milestone = find(
    milestones,
    ({title: milestoneName}) => milestoneName === nextReleaseVersion,
  );

  if (milestone) {
    debugLogger(
      `${milestone?.title ?? 'title'} equals nextRelease.version ${
        nextReleaseVersion ?? ''
      }`,
    );
  } else {
    milestone = find(
      milestones,
      ({title: milestoneName}) => milestoneName === nextReleaseVersion,
    );
  }

  logger.log(
    emojify(
      `:triangular_flag_on_post: processing ${milestones?.length} milestones`,
    ),
  );

  if (errors.length > 0) {
    throw new AggregateError(errors);
  }
}
