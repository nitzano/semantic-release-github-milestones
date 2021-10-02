import process from 'node:process';
import test, {ExecutionContext} from 'ava';

test.beforeEach((t: ExecutionContext) => {
  t.context = {foo: 'bar'};
  console.log('hello!');
});

test('listMilestones', (t) => {
  console.log(process.env.TEST);
  t.pass();
});
