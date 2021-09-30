import {isNil} from 'lodash';
import {PluginConfig} from './types';

export function resolveConfig(
  {closeMilestone}: Record<string, string | boolean>,
  env: Record<string, string>,
): PluginConfig {
  const githubToken = env.GH_TOKEN || env.GITHUB_TOKEN;

  return {githubToken, closeMilestone: !isNil(closeMilestone)};
}
