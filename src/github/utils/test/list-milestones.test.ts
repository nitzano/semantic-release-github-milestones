import test, {ExecutionContext} from 'ava';

test.beforeEach((t: ExecutionContext) => {
  t.context = {foo: 'bar'};
  console.log('hello!');
});

test('listMilestones', (t) => {
  t.pass();
});
