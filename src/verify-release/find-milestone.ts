import find from 'lodash/find.js';
import {type GithubMilestone} from '../types/github-milestone.js';

function compareMilestone(
  milestones: GithubMilestone[],
  value: string | undefined,
): GithubMilestone | undefined {
  return find(milestones, ({title: milestoneName}) => milestoneName === value);
}

/**
 * Try to find a milestone by comparing it's title to:
 * 1. next release name (with v)
 * 2. next release version (without v)
 * 3. branch name
 * 4. channel name
 *
 * @export
 * @param {GithubMilestone[]} milestones
 * @param {string} [nextReleaseVersion]
 * @param {string} [nextReleaseName]
 * @param {string} [branchName]
 * @param {string} [channelName]
 * @return {*}  {(GithubMilestone | undefined)}
 */
export function findMilestone(
  milestones: GithubMilestone[] = [],
  {
    nextReleaseVersion,
    nextReleaseName,
    branchName,
    branchChannel,
  }: {
    nextReleaseVersion?: string;
    nextReleaseName?: string;
    branchName?: string;
    branchChannel?: string;
  } = {},
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
  milestone = compareMilestone(milestones, branchChannel);

  if (milestone) {
    return milestone;
  }

  return undefined;
}
