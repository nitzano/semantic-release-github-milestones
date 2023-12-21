export type BranchInfo = {
  name: string;
  channel?: string;
  main: boolean;
  accept?: Array<'major' | 'minor' | 'patch'>;
  type?: string;
};
