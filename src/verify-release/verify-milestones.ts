import AggregateError from 'aggregate-error';
import {emojify} from 'node-emoji';
import {Context, GlobalConfig} from 'semantic-release';
import {getLogger} from '../logger';
import {GithubMilestone} from '../types/github-milestone';
import {findMilestone} from './find-milestone';
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
  const {name: branchName, channel: branchChannel} = branch;

  const nextReleaseName: string = (nextRelease as any).name as string;

  debugLogger(`branch=${JSON.stringify(branch, null, 2)}`);
  debugLogger(`nextRelease = ${JSON.stringify(nextRelease, null, 2)}`);

  // Find milestone by one of the options
  const milestone: GithubMilestone | undefined = findMilestone(milestones, {
    nextReleaseVersion,
    nextReleaseName,
    branchName,
    branchChannel,
  });

  if (milestone) {
    const {openIssues = 0, closesIssues = 0, title = ''} = milestone;

    logger.log(
      emojify(
        `:triangular_flag_on_post: processing milestone${
          title ?? ''
        } :flashlight: issues=${openIssues}/${openIssues + closesIssues}`,
      ),
    );

    logger.log(
      emojify(
        `:triangular_flag_on_post: ${openIssues} issues open out of ${
          openIssues + closesIssues
        })`,
      ),
    );
  }

  if (errors.length > 0) {
    throw new AggregateError(errors);
  }
}
