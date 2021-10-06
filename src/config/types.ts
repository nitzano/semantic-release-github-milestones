import {GlobalConfig} from 'semantic-release';

interface PluginOptions {
  /** Close milestone on success? */
  closeMilestoneOnSuccess?: boolean;
  /** Publish only if all issues are closed */
  checkClosedIssues?: boolean;
}

export interface PluginConfig extends GlobalConfig, PluginOptions {}

export interface Configuration extends PluginOptions {
  /** Github token to be used  */
  githubToken: string;
  /**  Github enterprise endpoint url */
  githubUrl?: string;
  /** Github enterprise API prefix */
  githubApiPathPrefix?: string;
}
