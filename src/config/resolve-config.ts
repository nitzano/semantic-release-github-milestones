import {GlobalConfig} from 'semantic-release';
import {getLogger} from '../logger';
import {PluginConfig} from './types';

const logger = getLogger().extend('resolve-config');

/**
 * Resolve config from options and environment variables
 *
 * @export
 * @param {Options} options
 * @param {Record<string, string>} env
 * @return {*}  {PluginConfig}
 */
export function resolveConfig(
  _options: GlobalConfig,
  env: Record<string, string>,
): PluginConfig {
  logger('reading envs');
  // Envs
  const githubToken = env.GH_TOKEN || env.GITHUB_TOKEN;

  // Options
  // const { closeMilestone = false } = options;

  return {githubToken, closeMilestone: false};
}
