import {
  type GlobalConfig,
  type PublishContext,
  type VerifyConditionsContext,
  type VerifyReleaseContext,
} from 'semantic-release';
import {type GithubMilestone} from './types/github-milestone.js';
import {verifyGithub} from './verify-conditions/verify-github.js';
import {verifyMilestones} from './verify-release/verify-milestones.js';

let verified: boolean;
let milestones: GithubMilestone[] = [];

export async function verifyConditions(
  pluginConfig: GlobalConfig,
  context: VerifyConditionsContext,
) {
  // Verify conditions
  milestones = await verifyGithub(pluginConfig, context);
  verified = true;
}

export async function verifyRelease(
  pluginConfig: GlobalConfig,
  context: VerifyReleaseContext,
) {
  if (!verified) {
    await verifyGithub(pluginConfig, context);
    verified = true;
  }

  await verifyMilestones(pluginConfig, context, milestones);
}

export async function publish(
  pluginConfig: GlobalConfig,
  context: PublishContext,
) {
  if (!verified) {
    await verifyGithub(pluginConfig, context);
    verified = true;
  }
}
