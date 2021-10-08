export interface GithubMilestone {
  title: string | null;
  description?: string | null;
  url: string;
  openIssues?: number;
  closesIssues?: number;
  state?: 'open' | 'closed' | 'all';
}
