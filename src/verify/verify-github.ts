import AggregateError from 'aggregate-error';
import {Context, GlobalConfig} from 'semantic-release';
import {resolveConfig} from '../config/resolve-config';
import {PluginConfig} from '../config/types';

/**
 * Called by semantic-release during the verification step
 * @param {*} pluginConfig The semantic-release plugin config
 * @param {*} context The context provided by semantic-release
 */
export async function verifyGithub(
  pluginConfig: GlobalConfig,
  context: Context,
) {
  const {env, options, logger} = context;
  const errors: Error[] = [];

  logger.log('test plugin! 🚀🚀🚀🚀');
  const config = resolveConfig(options as PluginConfig, env);
  logger.log(`test options: ${JSON.stringify(options, null, 2)}`);
  logger.log(`test config: ${JSON.stringify(pluginConfig, null, 2)}`);
  logger.log(`plugin config: ${JSON.stringify(config, null, 2)}`);

  // Throw any errors we accumulated during the validation
  if (errors.length > 0) {
    // eslint-disable-next-line unicorn/error-message
    throw new AggregateError(errors);
  }
}
