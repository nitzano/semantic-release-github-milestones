import {Octokit} from '@octokit/rest';
import {getLogger} from '../logger';

const logger = getLogger();

/**
 * Get github milestones for a repository
 *
 * @export
 */
export async function getMilestones(
  client: Octokit,
  repo: string,
  owner: string,
): Promise<string> {
  const milestones = await client.issues.listMilestones({repo, owner});
  logger(milestones);

  return 'work';
}
