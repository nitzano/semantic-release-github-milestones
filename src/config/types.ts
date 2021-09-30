export interface PluginConfig {
  /** Github token to be used  */
  githubToken: string;
  /**  Github enterprise endpoint url */
  githubUrl?: string;
  /** Github enterprise API prefix */
  githubApiPathPrefix?: string;
  /** Should close milestone on success? */
  closeMilestone?: boolean;
}
