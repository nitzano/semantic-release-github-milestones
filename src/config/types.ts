import {GlobalConfig} from 'semantic-release';

export interface PluginConfig extends GlobalConfig {
  /** Should close milestone on success? */
  closeMilestone?: boolean;
}

export interface Configuration {
  /** Github token to be used  */
  githubToken: string;
  /**  Github enterprise endpoint url */
  githubUrl?: string;
  /** Github enterprise API prefix */
  githubApiPathPrefix?: string;
  /** Should close milestone on success? */
  closeMilestone?: boolean;
}
