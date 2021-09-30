import debug from 'debug';

let logger: debug.Debugger;

export function getLogger(): debug.Debugger {
  if (!logger) {
    logger = debug(`semantic-release-github-milestones`);
  }

  return logger;
}
