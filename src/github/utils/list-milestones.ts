import {Octokit} from '@octokit/rest';
import {getLogger} from '../../logger';
import {GithubMilestone} from '../../types/github-milestone';

const debugLogger = getLogger().extend('list-milestones');

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

  debugLogger(`found ${milestones?.length} milestones`);
  const githubMilestones = milestones.map(
    ({
      title,
      url,
      description,
      closed_issues: closedIssues,
      open_issues: openIssues,
      html_url: htmlUrl,
      state,
    }) => ({
      title,
      htmlUrl,
      description,
      url,
      openIssues,
      closedIssues,
      state,
    }),
  );

  return githubMilestones;
}
