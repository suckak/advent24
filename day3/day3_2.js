const fs = require('node:fs');

try {
  let data = fs.readFileSync('./input.txt', 'utf8');
  //.replace(/don't\(\).*?do\(\)/g, '');
  // ITERATIVE
  while (data.includes("don't()")) {
    const start = data.indexOf("don't()");
    const end = data.indexOf('do()', start);
    let aux = data.substring(0, start);
    if (end !== -1) {
      aux += data.substring(end + 4);
    }
    data = aux;
  }

  fs.writeFileSync('./iterative.txt', data);
  const operations = data
    .split('mul')
    .filter((val) => val.startsWith('('))
    .map((val) =>
      val.substring(1).split(')', 1).join('').split(',').map(Number)
    )
    .filter((nums) => nums.length === 2 && !nums.includes(NaN))
    .filter((nums) => !nums.some((element) => element < 1 || element > 999));

  console.log('ops', operations.length);

  const result = operations.reduce(
    (acc, current) => acc + current[0] * current[1],
    0
  );
  console.log('result ', result);
} catch (err) {
  console.error(err);
}
