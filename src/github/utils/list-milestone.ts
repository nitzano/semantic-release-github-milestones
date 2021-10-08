import {Octokit} from '@octokit/rest';
import {getLogger} from '../../logger';
import {GithubMilestone} from '../../types/github-milestone';

const logger = getLogger().extend('list-milestones');

/**
 * Get github milestones for a repository
 *
 * @export
 */
export async function listMilestones(
  client: Octokit,

  repo: string,
  owner: string,
): Promise<GithubMilestone[]> {
  const {data: milestones = []} = await client.issues.listMilestones({
    repo,
    owner,
  });

  logger(`milestone = ${JSON.stringify(milestones, null, 2)}`);
  const githubMilestones = milestones.map(({title, description, url}) => ({
    title,
    description,
    url,
  }));

  return githubMilestones;
}
