import AggregateError from 'aggregate-error';
import {emojify} from 'node-emoji';
import {Context, GlobalConfig} from 'semantic-release';
import {GithubMilestone} from '../types/github-milestone';

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
  //   Const {env, options, logger} = context;
  const {logger} = context;
  const errors: Error[] = [];

  logger.log(
    emojify(
      `:triangular_flag_on_post: processing ${milestones?.length} milestones`,
    ),
  );

  if (errors.length > 0) {
    throw new AggregateError(errors);
  }
}
