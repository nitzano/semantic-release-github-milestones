type NullableString = string | undefined;

export type GithubMilestone = {
  title?: string;
  description: NullableString;
  url: string;
  htmlUrl: string;
  openIssues: number;
  closedIssues: number;
  state?: 'open' | 'closed';
};
