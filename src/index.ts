import { GlobalConfig, PublishContext, VerifyConditionsContext, VerifyReleaseContext } from 'semantic-release';
import { GithubMilestone } from './types/github-milestone';
import { verifyGithub } from './verify-conditions/verify-github';
import { verifyMilestones } from './verify-release/verify-milestones';

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

export async function publish(pluginConfig: GlobalConfig, context: PublishContext) {
  if (!verified) {
    await verifyGithub(pluginConfig, context);
    verified = true;
  }
}
