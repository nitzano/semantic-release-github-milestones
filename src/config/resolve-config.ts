import debug from 'debug';
import {PluginConfig} from './types';

const logger = debug('resolve-config');
interface Options {
  searchChannel?: boolean;
  closeMilestone?: boolean;
}

/**
 * Resolve config from options and environment variables
 *
 * @export
 * @param {Options} options
 * @param {Record<string, string>} env
 * @return {*}  {PluginConfig}
 */
export function resolveConfig(
  options: Options,
  env: Record<string, string>,
): PluginConfig {
  logger('reading envs');
  // Envs
  const githubToken = env.GH_TOKEN || env.GITHUB_TOKEN;

  // Options
  const {closeMilestone = false} = options;

  return {githubToken, closeMilestone};
}
