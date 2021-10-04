import {Octokit} from '@octokit/rest';

/**
 * Get github milestones for a repository
 *
 * @export
 */
export async function listMilestones(
  client: Octokit,
  repo: string,
  owner: string,
): Promise<Record<string, any>> {
  const {data: milestones = {}} = await client.issues.listMilestones({
    repo,
    owner,
  });
  return milestones;
}
