export type GithubMilestone = {
  title?: string;
  description: string | undefined;
  url: string;
  htmlUrl: string;
  openIssues: number;
  closedIssues: number;
  state?: 'open' | 'closed';
};
