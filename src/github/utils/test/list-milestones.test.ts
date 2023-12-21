/* eslint-disable @typescript-eslint/no-unsafe-argument */
import {type Octokit} from '@octokit/rest';
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
  const client: Octokit = createClient('token');

  nock('https://api.github.com')
    .get('/repos/owner1/repo1/milestones')
    .reply(200, FAKE_MILESTONES);

  const result = await listMilestones(client, 'repo1', 'owner1');
  t.is(result.length, 2);
});
