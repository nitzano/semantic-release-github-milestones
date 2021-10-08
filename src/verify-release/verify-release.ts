import AggregateError from 'aggregate-error';
import {emojify} from 'node-emoji';
import {Context, GlobalConfig} from 'semantic-release';

/**
 * Called by semantic-release during the verification step
 * @param {*} pluginConfig The semantic-release plugin config
 * @param {*} context The context provided by semantic-release
 */
export async function verifyMilestones(
  pluginConfig: GlobalConfig,
  context: Context,
) {
  //   Const {env, options, logger} = context;
  const {logger} = context;
  const errors: Error[] = [];

  //   Const config = resolveConfig(options as PluginConfig, env);

  logger.log(emojify(`:triangular_flag_on_post: verifyRelease 💛`));

  if (errors.length > 0) {
    throw new AggregateError(errors);
  }
}
