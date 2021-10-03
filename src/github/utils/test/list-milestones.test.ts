import process from 'process';
import test, {ExecutionContext} from 'ava';
import {createClient} from '../../client/create-client';

test.beforeEach((t: ExecutionContext) => {
  if (process.env.GITHUB_TOKEN && process.env.GITHUB_URL) {
    t.context = {
      client: createClient(process.env.GITHUB_TOKEN, process.env.GITHUB_URL),
    };
  }
});

test('listMilestones', (t) => {
  console.log(process.env.TEST);
  t.pass();
});
