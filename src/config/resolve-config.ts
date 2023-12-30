import {getLogger} from '../logger.js';
import {type Configuration, type PluginConfig} from './types.js';

const logger = getLogger().extend('resolve-config');

/**
 * Resolve config from options and environment variables
 *
 * @export
 * @param {Options} pluginsConfig
 * @param {Record<string, string>} env
 * @return {*}  {PluginConfig}
 */
export function resolveConfig(
  pluginsConfig: PluginConfig,
  env: Record<string, string>,
): Configuration {
  logger('reading envs');
  // Envs
  const githubToken = env.GH_TOKEN || env.GITHUB_TOKEN;
  if (!githubToken) throw new Error('no github token');

  // Options
  const {closeMilestones = false} = pluginsConfig;

  return {githubToken, closeMilestones};
}
