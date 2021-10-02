import {Context, GlobalConfig} from 'semantic-release';
import {verifyGithub} from './verify/verify-github';

let verified: boolean;

export async function verifyConditions(
  pluginConfig: GlobalConfig,
  context: Context,
) {
  await verifyGithub(pluginConfig, context);
  verified = true;
}

export async function publish(pluginConfig: GlobalConfig, context: Context) {
  if (!verified) {
    await verifyGithub(pluginConfig, context);
    verified = true;
  }

  // Return publishGitLab(pluginConfig, context);
}
