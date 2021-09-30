import AggregateError from 'aggregate-error';
import {Config, Context} from 'semantic-release';

/**
 * Called by semantic-release during the verification step
 * @param {*} pluginConfig The semantic-release plugin config
 * @param {*} context The context provided by semantic-release
 */
export async function verifyGithub(_pluginConfig: Config, context: Context) {
  const {logger} = context;
  const errors: Error[] = [];

  logger.log('test plugin! 🚀🚀🚀🚀');

  // Throw any errors we accumulated during the validation
  if (errors.length > 0) {
    // eslint-disable-next-line unicorn/error-message
    throw new AggregateError(errors);
  }
}
