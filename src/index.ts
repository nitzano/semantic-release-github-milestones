import {Context, GlobalConfig} from 'semantic-release';
import {verifyGithub} from './verify-conditions/verify-github';
import {verifyMilestones} from './verify-release/verify-release';

let verified: boolean;

export async function verifyConditions(
  pluginConfig: GlobalConfig,
  context: Context,
) {
  // Verify conditions
  await verifyGithub(pluginConfig, context);

  verified = true;
}

export async function verifyRelease(
  pluginConfig: GlobalConfig,
  context: Context,
) {
  if (!verified) {
    await verifyGithub(pluginConfig, context);
    verified = true;
  }

  await verifyMilestones(pluginConfig, context);
}

export async function publish(pluginConfig: GlobalConfig, context: Context) {
  if (!verified) {
    await verifyGithub(pluginConfig, context);
    verified = true;
  }

  // Return publishGitLab(pluginConfig, context);
}
