import {throttling} from '@octokit/plugin-throttling';
import {Octokit} from '@octokit/rest';
import {getLogger} from '../../logger';

const logger = getLogger();

export function createClient(githubUrl: string, githubToken: string): Octokit {
  const ThrottledOctokit = Octokit.plugin(throttling);
  logger(`baseUrl: ${githubUrl}`);

  const octokit = new ThrottledOctokit({
    auth: `token ${githubToken}`,
    baseUrl: githubUrl,
    throttle: {
      onRateLimit: (
        retryAfter: number,
        options: {method: string; url: string; request: {retryCount: number}},
        octokit: Octokit,
      ) => {
        octokit.log.warn(
          `Request quota exhausted for request ${options.method} ${options.url}`,
        );

        // Retry twice after hitting a rate limit error, then give up
        if (options.request?.retryCount <= 2) {
          logger(`Retrying after ${retryAfter} seconds!`);
          return true;
        }
      },
      onAbuseLimit: (
        _retryAfter: number,
        options: Record<string, string>,
        octokit: Octokit,
      ) => {
        // Does not retry, only logs a warning
        octokit.log.warn(
          `Abuse detected for request ${options?.method} ${options?.url}`,
        );
      },
    },
  });

  return octokit;
}
