import {Octokit} from '@octokit/rest';
import {Debugger} from 'debug';
import {getLogger} from '../logger';

const logger: Debugger = getLogger().extend('get-github-client');

interface GithubClientOptions {
  githubToken: string;
  githubUrl: string;
}

export function getGithubClient({
  githubToken,
  githubUrl,
}: GithubClientOptions): Octokit {
  logger(`baseUrl: ${githubUrl}`);

  const githubClient = new Octokit({
    auth: `token ${githubToken}`,
    baseUrl: githubUrl,
  });

  return githubClient;
}
