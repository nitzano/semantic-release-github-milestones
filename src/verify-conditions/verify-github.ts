import SemanticReleaseError from '@semantic-release/error';
import AggregateError from 'aggregate-error';
import gitUrlParse, {GitUrl} from 'git-url-parse';
import {Context, GlobalConfig} from 'semantic-release';
import {resolveConfig} from '../config/resolve-config';
import {PluginConfig} from '../config/types';
import {createClient} from '../github/client/create-client';
import {listMilestones} from '../github/utils/list-milestone';
import {getLogger} from '../logger';
import {GithubMilestone} from '../types/github-milestone';

const debugLogger = getLogger();

/**
 * Called by semantic-release during the verification step
 * @param {*} pluginConfig The semantic-release plugin config
 * @param {*} context The context provided by semantic-release
 */
export async function verifyGithub(
  pluginConfig: GlobalConfig,
  context: Context,
) {
  const {env, options} = context;
  const errors: Error[] = [];

  const {repositoryUrl = ''} = options as PluginConfig;

  // Build config
  const config = resolveConfig(options as PluginConfig, env);
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
  const milestones: GithubMilestone[] = await listMilestones(
    client,
    repoOwner,
    repoName,
  );
  debugLogger(`milestones=${JSON.stringify(milestones, null, 2)}`);

  pluginConfig.milestones = milestones;

  if (errors.length > 0) {
    throw new AggregateError(errors);
  }
}
