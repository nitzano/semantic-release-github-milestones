export interface PluginOptions {
  /** Should close milestone on success? */
  closeMilestone?: boolean;
}

export interface PluginConfig extends PluginOptions {
  /** Github token to be used  */
  githubToken: string;
  /**  Github enterprise endpoint url */
  githubUrl?: string;
  /** Github enterprise API prefix */
  githubApiPathPrefix?: string;
}
