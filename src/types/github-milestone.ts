export interface GithubMilestone {
  title: string | null;
  description?: string | null;
  url: string;
  htmlUrl: string;
  openIssues?: number;
  closesIssues?: number;
  state?: 'open' | 'closed' | 'all';
}
