import {PluginConfig} from './types';

export function resolveConfig(env: Record<string, string>): PluginConfig {
  const githubToken = env.GH_TOKEN || env.GITHUB_TOKEN;

  return {githubToken};
}
