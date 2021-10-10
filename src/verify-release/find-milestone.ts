import {find} from 'lodash';
import {GithubMilestone} from '../types/github-milestone';

export function findMilestone(
  milestones: GithubMilestone[],
  nextReleaseVersion?: string,
  nextReleaseName?: string,
): GithubMilestone | undefined {
  let milestone: GithubMilestone | undefined;

  milestone = find(
    milestones,
    ({title: milestoneName}) => milestoneName === nextReleaseVersion,
  );

  if (milestone) {
    return milestone;
  }

  milestone = find(
    milestones,
    ({title: milestoneName}) => milestoneName === nextReleaseName,
  );

  if (milestone) {
    return milestone;
  }

  return undefined;
}
