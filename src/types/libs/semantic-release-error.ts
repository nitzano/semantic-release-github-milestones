declare module '@semantic-release/error' {
  class SemanticReleaseError extends Error {
    constructor(message?: string, code?: string, details?: string);
  }
  export = SemanticReleaseError;
}
