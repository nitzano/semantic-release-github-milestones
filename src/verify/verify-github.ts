import AggregateError from 'aggregate-error';
import {Config, Context} from 'semantic-release';
import {resolveConfig} from '../config/resolve-config';
import {getLogger} from '../logger';

const logger = getLogger().extend('verify-github');

/**
 * Called by semantic-release during the verification step
 * @param {*} pluginConfig The semantic-release plugin config
 * @param {*} context The context provided by semantic-release
 */
export async function verifyGithub(_pluginConfig: Config, context: Context) {
  const {env, options, logger: semRelLogger} = context;

  const config = resolveConfig(options, env);
  logger(`test options: ${JSON.stringify(options, null, 2)}`);
  logger(`test config: ${JSON.stringify(config, null, 2)}`);

  const errors: Error[] = [];

  semRelLogger.log('test plugin! 🚀🚀🚀🚀');

  // Throw any errors we accumulated during the validation
  if (errors.length > 0) {
    // eslint-disable-next-line unicorn/error-message
    throw new AggregateError(errors);
  }
}
