export type GithubMilestone = {
  title?: string;
  description?: string | null;
  url?: string;
  htmlUrl?: string;
  openIssues?: number;
  closedIssues?: number;
  state?: 'open' | 'closed';
};
