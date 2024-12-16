const fs = require('node:fs');

class Coordinate {
  constructor(x, y, matrix) {
    this.x = x;
    this.y = y;
    this.id = `[${x},${y}]  :  ${matrix[x][y]}`;
    this.value = matrix[x][y];
  }

  toString() {
    return this.id;
  }
}

try {
  const data = fs.readFileSync('./day10/input.txt', 'utf8');

  const matrix = data
    .split(/\r?\n|\r|\n/g)
    .map((val) => val.split('').map(Number));

  const getNextStep = (coordinate, matrix) => {
    const xLimit = matrix.length - 1;
    const yLimit = matrix[0].length - 1;
    const paths = [];
    const curr = matrix[coordinate.x][coordinate.y];

    // derecha
    if (coordinate.y < yLimit) {
      paths.push(new Coordinate(coordinate.x, coordinate.y + 1, matrix));
    }

    // abajo
    if (coordinate.x < xLimit) {
      paths.push(new Coordinate(coordinate.x + 1, coordinate.y, matrix));
    }

    // izquierda
    if (coordinate.y > 0) {
      paths.push(new Coordinate(coordinate.x, coordinate.y - 1, matrix));
    }

    // abajo
    if (coordinate.x > 0) {
      paths.push(new Coordinate(coordinate.x - 1, coordinate.y, matrix));
    }

    return paths.filter((val) => {
      return curr + 1 === matrix[val.x][val.y];
    });
  };

  const total = [];

  const checkPath = (coord, path, matrix) => {
    if (matrix[coord.x][coord.y] === 9) {
      const result = [...path.flat(), coord].flat();
      return [result];
    }

    const nextSteps = getNextStep(coord, matrix);
    if (nextSteps.length < 1) {
      return [];
    }

    return nextSteps
      .map((val) => checkPath(val, [...path, coord], matrix))
      .flat();
  };

  for (let x = 0; x < matrix.length; x++) {
    const line = matrix[x];
    for (let y = 0; y < line.length; y++) {
      const element = line[y];
      if (element === 0) {
        const test = checkPath(new Coordinate(x, y, matrix), [], matrix);
        const unique = new Map();
        test.forEach((arr) => {
          unique.set(arr[arr.length - 1].id, arr);
        });
        total.push(unique.size);
      }
    }
  }

  console.log(
    'total',
    total.reduce((acc, current) => acc + current, 0)
  );
} catch (err) {
  console.error(err);
}
