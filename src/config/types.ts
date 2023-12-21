import {type GlobalConfig} from 'semantic-release';

type PluginOptions = {
  /** Close milestone on success? */
  closeMilestones?: boolean;
  /** Publish only if all issues are closed */
  checkIssues?: boolean;
  /** Append milestone link and description to notes */
  appendNotes?: boolean;
};

export type PluginConfig = Record<string, unknown> &
  GlobalConfig &
  PluginOptions;

export type Configuration = {
  /** Github token to be used  */
  githubToken: string;
  /**  Github enterprise endpoint url */
  githubUrl?: string;
  /** Github enterprise API prefix */
  githubApiPathPrefix?: string;
} & PluginOptions;
