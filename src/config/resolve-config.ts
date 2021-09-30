import {PluginConfig} from './types';

interface Options {
  closeMilestone?: boolean;
}

export function resolveConfig(
  options: Options,
  env: Record<string, string>,
): PluginConfig {
  // Envs
  const githubToken = env.GH_TOKEN || env.GITHUB_TOKEN;

  // Options
  const {closeMilestone = false} = options;

  return {githubToken, closeMilestone};
}
