import SemanticReleaseError from '@semantic-release/error';
import AggregateError from 'aggregate-error';
import gitUrlParse, {GitUrl} from 'git-url-parse';
import {Context, GlobalConfig} from 'semantic-release';
import {resolveConfig} from '../config/resolve-config';
import {PluginConfig} from '../config/types';
import {getLogger} from '../logger';

const debugLogger = getLogger();

/**
 * Called by semantic-release during the verification step
 * @param {*} pluginConfig The semantic-release plugin config
 * @param {*} context The context provided by semantic-release
 */
export async function verifyGithub(
  pluginConfig: GlobalConfig,
  context: Context,
) {
  const {env, options} = context;
  const errors: Error[] = [];

  const {repositoryUrl = ''} = options as PluginConfig;

  const config = resolveConfig(options as PluginConfig, env);
  pluginConfig.config = config;
  debugLogger(`config=${JSON.stringify(config, null, 2)}`);

  const {name, owner}: GitUrl = gitUrlParse(repositoryUrl);

  debugLogger(`repo=${repositoryUrl} name=${name} owner=${owner}`);

  if (!name) {
    errors.push(new SemanticReleaseError('could not parse repository name'));
  }

  if (!owner) {
    errors.push(new SemanticReleaseError('could not parse repository owner'));
  }

  pluginConfig.repoOwner = owner;
  pluginConfig.repoName = name;

  if (errors.length > 0) {
    throw new AggregateError(errors);
  }
}
