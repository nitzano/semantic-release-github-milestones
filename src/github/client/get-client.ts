import {type Octokit} from '@octokit/rest';
import {createClient} from './create-client.js';

let client: Octokit;

export function getGithubClient(githubToken: string): Octokit {
  if (!client) {
    client = createClient(githubToken);
  }

  return client;
}
