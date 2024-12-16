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

  console.log(matrix);
  const getNextStep = (coordinate, matrix, omit) => {
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

    // omit.forEach((element) => {
    //   const deleteIndex = paths.findIndex((val) => val.id === element.id);

    //   if (deleteIndex !== -1) {
    //     paths.splice(deleteIndex);
    //   }
    // });

    return paths.filter((val) => {
      return curr + 1 === matrix[val.x][val.y];
    });
  };

  let top = [];
  const total = [];

  const checkPath = (coord, path, used, matrix) => {
    // console.log(coord);
    if (
      matrix[coord.x][coord.y] === 9 &&
      !used.includes((val) => val.id === coord.id)
    ) {
      top.push([...path.flat(), coord].flat());
      return [[...path.flat(), coord].flat()];
    }

    const nextSteps = getNextStep(coord, matrix, used);
    if (nextSteps.length < 1) {
      return;
    }

    return nextSteps.map((val) =>
      checkPath(
        val,
        [...path.flat(), coord].flat(),
        [...used.flat(), coord].flat(),
        matrix
      )
    );
  };

  for (let x = 0; x < matrix.length; x++) {
    const line = matrix[x];
    for (let y = 0; y < line.length; y++) {
      const element = line[y];
      if (element === 0) {
        top = [];
        const test = checkPath(
          new Coordinate(x, y, matrix),
          [],
          [],
          matrix,
          []
        );
        const unique = new Map();
        top.forEach((arr) => {
          const title = arr.reduce((acc, current) => acc + current.id, '');
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
  // console.log(checkPath(createCoord(0, 2), [], [], matrix));
  // const coord = new Coordinate(6, 6, matrix);
  // console.log(coord);
  // // console.log(getNextStep(coord, matrix, []));
  // const test = checkPath(coord, [], [], matrix, []);
  // const unique = new Map();
  // top.forEach((arr) => {
  //   const title = arr.reduce((acc, current) => acc + current.id, '');
  //   unique.set(arr[arr.length - 1].id, arr);
  // });
  // console.log('map', unique);
  // console.log('check', test);
  // console.log('top', top);
  // console.log('aaaa');
} catch (err) {
  console.error(err);
}
