import checkHealth from './index.js';

// const input = [
//     {name: 'Max', health: 10},
//     {name: 'Snuppy', health: 40},
//     {name: 'Tech', health: 90}
// ];

// test('should check health to critical',() => {
//     const received = checkHealth({name: 'Max', health: 10});
//     const expected = 'critical';
//     expect(received).toBe(expected);
// })
// test('should check health to wounded',() => {
//     const received = checkHealth({name: 'Snuppy', health: 40});
//     const expected = 'wounded';
//     expect(received).toBe(expected)
// })
// test('should check health to healthy',() => {
//     const received = checkHealth({name: 'Tech', health: 90});
//     const expected = 'healthy';
//     expect(received).toBe(expected);
// })
test.each([
  { name: 'Max', health: 10, state: 'critical' },
  { name: 'Snuppy', health: 40, state: 'wounded' },
  { name: 'Tech', health: 90, state: 'healthy' },
])('should check health', (person) => {
  const expected = person.state;
  const received = checkHealth(person);
  expect(received).toBe(expected);
});
