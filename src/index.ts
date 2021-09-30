import {Config, Context} from 'semantic-release';
import {verifyGithub} from './verify-github';

let verified: boolean;

export async function verifyConditions(pluginConfig: Config, context: Context) {
  await verifyGithub(pluginConfig, context);
  verified = true;
}

export async function publish(pluginConfig: Config, context: Context) {
  if (!verified) {
    await verifyGithub(pluginConfig, context);
    verified = true;
  }

  // Return publishGitLab(pluginConfig, context);
}
