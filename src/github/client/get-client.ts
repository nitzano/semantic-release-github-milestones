import {Octokit} from '@octokit/rest';
import {createClient} from './create-client';

let client: Octokit;

export function getGithubClient(
  githubToken: string,
  githubUrl: string,
): Octokit {
  if (!client) {
    client = createClient(githubUrl, githubToken);
  }

  return client;
}
