import process from 'process';
import {Octokit} from '@octokit/rest';
import test from 'ava';
import nock from 'nock';
import {createClient} from '../../client/create-client';
import {listMilestones} from '../list-milestones';

test.afterEach.always(() => {
  // Clear nock
  nock.cleanAll();
});

test('listMilestones', async (t) => {
  let client: Octokit;

  if (process.env.GITHUB_TOKEN) {
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
