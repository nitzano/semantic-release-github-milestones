import {Octokit} from '@octokit/rest';
import SemanticReleaseError from '@semantic-release/error';

export async function closeGithubMilestone(
  client: Octokit,
  owner: string,
  repo: string,
  milestoneId: number,
): Promise<void> {
  if (milestoneId) {
    try {
      /* eslint-disable @typescript-eslint/naming-convention */
      await client.rest.issues.updateMilestone({
        owner,
        repo,
        milestone_number: milestoneId,
      });
      /* eslint-enable @typescript-eslint/naming-convention */
    } catch {
      throw new SemanticReleaseError(
        `could not close milestone`,
        'EFAILEDCLOSINGMILESTONE',
        'failed to close the milestone',
      );
    }
  }
}
