import SemanticReleaseError from '@semantic-release/error';
import AggregateError from 'aggregate-error';
import gitUrlParse, {type GitUrl} from 'git-url-parse';
import {
  type GlobalConfig,
  type VerifyConditionsContext,
} from 'semantic-release';
import {resolveConfig} from '../config/resolve-config.js';
import {createClient} from '../github/client/create-client.js';
import {listMilestones} from '../github/utils/list-milestones.js';
import {getLogger} from '../logger.js';
import {type GithubMilestone} from '../types/github-milestone.js';

const debugLogger = getLogger();

/**
 * Called by semantic-release during the verification step
 * @param {*} pluginConfig The semantic-release plugin config
 * @param {*} context The context provided by semantic-release
 */
export async function verifyGithub(
  pluginConfig: GlobalConfig,
  context: VerifyConditionsContext,
): Promise<GithubMilestone[]> {
  const {env} = context;
  const errors: Error[] = [];

  const {repositoryUrl = ''} = pluginConfig;

  // Build config
  const config = resolveConfig(pluginConfig, env);
  pluginConfig.config = config;

  debugLogger(`config=${JSON.stringify(config, null, 2)}`);

  // Extract git url information
  const {name: repoName, owner: repoOwner}: GitUrl = gitUrlParse(repositoryUrl);

  debugLogger(`repo=${repositoryUrl} name=${repoName} owner=${repoOwner}`);

  if (!repoName) {
    errors.push(new SemanticReleaseError('could not parse repository name'));
  }

  if (!repoOwner) {
    errors.push(new SemanticReleaseError('could not parse repository owner'));
  }

  pluginConfig.repoOwner = repoOwner;
  pluginConfig.repoName = repoName;

  // List milestones
  const client = createClient(config.githubToken);
  const githubMilestones: GithubMilestone[] = await listMilestones(
    client,
    repoName,
    repoOwner,
  );

  if (errors.length > 0) {
    throw new AggregateError(errors);
  }

  return githubMilestones;
}
