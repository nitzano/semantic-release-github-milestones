import {Context, GlobalConfig} from 'semantic-release';
import {GithubMilestone} from './types/github-milestone';
import {verifyGithub} from './verify-conditions/verify-github';
import {verifyMilestones} from './verify-release/verify-milestones';

let verified: boolean;
let milestones: GithubMilestone[] = [];

export async function verifyConditions(
  pluginConfig: GlobalConfig,
  context: Context,
) {
  // Verify conditions
  milestones = await verifyGithub(pluginConfig, context);
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

  await verifyMilestones(pluginConfig, context, milestones);
}

export async function publish(pluginConfig: GlobalConfig, context: Context) {
  if (!verified) {
    await verifyGithub(pluginConfig, context);
    verified = true;
  }
}
