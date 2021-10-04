import process from 'process';
import {Octokit} from '@octokit/rest';
import test from 'ava';
import nock from 'nock';
import {createClient} from '../../client/create-client';
import {listMilestones} from '../list-milestones';
import {FAKE_MILESTONES} from './fixtures/fake-milestones';

test.afterEach.always(() => {
  // Clear nock
  nock.cleanAll();
});

test('listMilestones', async (t) => {
  let client: Octokit;

  nock('https://api.github.com')
    .get('/repos/owner1/repo1/milestones')
    .reply(200, FAKE_MILESTONES);

  if (process.env.GITHUB_TOKEN) {
    client = createClient(process.env.GITHUB_TOKEN);
    const result = await listMilestones(client, 'repo1', 'owner1');
    console.log(result);
  }

  t.pass();
});
