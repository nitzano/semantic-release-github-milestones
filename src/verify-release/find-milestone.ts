import {find} from 'lodash';
import {GithubMilestone} from '../types/github-milestone';

function compareMilestone(
  milestones: GithubMilestone[],
  value: string | undefined,
): GithubMilestone | undefined {
  return find(milestones, ({title: milestoneName}) => milestoneName === value);
}

export function findMilestone(
  milestones: GithubMilestone[],
  nextReleaseVersion?: string,
  nextReleaseName?: string,
  branchName?: string,
  channelName?: string,
): GithubMilestone | undefined {
  let milestone: GithubMilestone | undefined;

  // Next release version
  milestone = compareMilestone(milestones, nextReleaseVersion);

  if (milestone) {
    return milestone;
  }

  // Next release name
  milestone = compareMilestone(milestones, nextReleaseName);

  if (milestone) {
    return milestone;
  }

  // Branch name
  milestone = compareMilestone(milestones, branchName);

  if (milestone) {
    return milestone;
  }

  // Channel name
  milestone = compareMilestone(milestones, channelName);

  if (milestone) {
    return milestone;
  }

  return undefined;
}
