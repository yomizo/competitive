// angle number leteral
type Angle = 90 | 180 | 270 | 360;

// auto create array
const create2DArr = (row: number, column: number) => {
  const twoDArr: number[][] = [];
  for (let i = 0; i < row; i += 1) {
    twoDArr.push([...Array(column).keys()]);
  }

  return twoDArr;
};

// can specify angle, clockwise version
const rotateArr = (
  arr: number[][],
  defaultAngle: Angle,
  isClockWise = true
) => {
  const angle = isClockWise ? defaultAngle : ((360 - defaultAngle) as Angle);

  return [...Array(angle / 90).keys()].reduce(
    (prev, _cur) =>
      prev[0].map((_, idx) => prev.map((row) => row[idx]).reverse()),
    arr
  );
};

// using example
const twoDArr = create2DArr(4, 6);
const rotatedArr = rotateArr(twoDArr, 180);
console.log(`rotatedArr`);
console.log(rotatedArr);

class TwoDArray {
  twoDArr: (number | string | boolean)[][];
  constructor(twoDArr: (number | string | boolean)[][]) {
    this.twoDArr = twoDArr;
  }

  rotateArr = () =>
    this.twoDArr[0].map((_, idx) =>
      this.twoDArr.map((row) => row[idx]).reverse()
    );
}

export default TwoDArray;

// export const rotateArr = (twoDArr: (number | string | boolean)[][]) =>
//   twoDArr[0].map((_, idx) => twoDArr.map((row) => row[idx])).reverse();
