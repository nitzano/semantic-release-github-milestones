export interface GithubMilestones {
  name: string;
  description?: string;
  url: string;
  openIssues: number;
  closesIssues: number;
  state?: 'open' | 'closed' | 'all';
}
