import {isNil} from 'lodash';
import {PluginConfig} from './types';

interface Options {
  closeMilestone?: boolean;
}

export function resolveConfig(
  options: Options,
  env: Record<string, string>,
): PluginConfig {
  const githubToken = env.GH_TOKEN || env.GITHUB_TOKEN;
  const closeMilestone = !isNil(options.closeMilestone);

  return {githubToken, closeMilestone};
}
