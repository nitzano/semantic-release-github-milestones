import process from 'process';
import {Octokit} from '@octokit/rest';
import test from 'ava';
import {createClient} from '../../client/create-client';
import {listMilestones} from '../list-milestones';

// Test.beforeEach((t: ExecutionContext) => {
//   If (process.env.GITHUB_TOKEN && process.env.GITHUB_URL) {
//     t.context = {
//       client: createClient(process.env.GITHUB_TOKEN, process.env.GITHUB_URL),
//     };
//   }
// });

test('listMilestones', async (t) => {
  let client: Octokit;

  if (process.env.GITHUB_TOKEN && process.env.GITHUB_URL) {
    client = createClient(process.env.GITHUB_TOKEN);
    const result = await listMilestones(
      client,
      'semantic-release-github-milestones',
      'nitzano',
    );
    console.log(result);
  }

  t.pass();
});
