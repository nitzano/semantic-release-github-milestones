import {getLogger} from '../logger';
import {Configuration, PluginConfig} from './types';

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
  options: PluginConfig,
  env: Record<string, string>,
): Configuration {
  logger('reading envs');
  // Envs
  const githubToken = env.GH_TOKEN || env.GITHUB_TOKEN;

  // Options
  const {closeMilestones} = options;

  return {githubToken, closeMilestones};
}
