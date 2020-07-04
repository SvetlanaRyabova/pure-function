export function checkHealth(person) {
  let result = '';
  if (person.health < 15) {
    result = 'critical';
  } else if (person.health <= 50) {
    result = 'wounded';
  } else {
    result = 'healthy';
  }
  return result;
}
