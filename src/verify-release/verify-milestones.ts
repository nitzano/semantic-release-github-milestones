import AggregateError from 'aggregate-error';
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

  console.log(`branch=${JSON.stringify(branch, null, 2)}`);

  debugLogger(`nextRelease = ${JSON.stringify(nextRelease, null, 2)}`);

  logger.log(
    emojify(
      `:triangular_flag_on_post: processing ${milestones?.length} milestones`,
    ),
  );

  if (errors.length > 0) {
    throw new AggregateError(errors);
  }
}
