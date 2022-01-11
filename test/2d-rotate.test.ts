import TwoDArray from "../src/2d-rotate";

describe("2D roatate", () => {
  test("number", () => {
    const arr1 = [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ];

    const arr2 = [
      [1, 2, 3],
      [1, 2, 3],
      [1, 2, 3],
    ];

    const result = new TwoDArray(arr1).rotateArr();
    expect(result).toEqual(arr2);
  });

  test("string", () => {
    const arr1 = [
      ["one", "two", "three"],
      ["one", "two", "three"],
      ["one", "two", "three"],
    ];

    const arr2 = [
      ["three", "three", "three"],
      ["two", "two", "two"],
      ["one", "one", "one"],
    ];

    const result = new TwoDArray(arr1).rotateArr();
    expect(result).toEqual(arr2);
  });

  test("string", () => {
    const arr1 = [
      ["one", "two", "three"],
      ["one", "two", "three"],
      ["one", "two", "three"],
    ];

    const arr2 = [
      ["three", "three", "three"],
      ["two", "two", "two"],
      ["one", "one", "one"],
    ];

    const result = new TwoDArray(arr1).rotateArr();
    expect(result).toEqual(arr2);
  });

  test("boolean", () => {
    const arr1 = [
      [true, false, true],
      [true, false, true],
      [true, false, true],
    ];

    const arr2 = [
      [true, true, true],
      [false, false, false],
      [true, true, true],
    ];

    const result = new TwoDArray(arr1).rotateArr();
    expect(result).toEqual(arr2);
  });
});
