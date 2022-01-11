import Palindrome from "../src/palondrome";

describe("palindrome", () => {
  test("just palindrome", () => {
    const str = "しんぶんし";
    const result: boolean = new Palindrome(str).isPalindrome();
    expect(result).toBeTruthy();
  });

  test("like number", () => {
    const str = "123454321";
    const result: boolean = new Palindrome(str).isPalindrome();
    expect(result).toBeTruthy();
  });

  test("symbol", () => {
    const str = "\n!@#$%^&*()\n)(*&^%$#@!\n";
    const result: boolean = new Palindrome(str).isPalindrome();
    expect(result).toBeTruthy();
  });

  test("blank", () => {
    const str = "";
    const result: boolean = new Palindrome(str).isPalindrome();
    expect(result).toBeTruthy();
  });
});

describe("not palindrome", () => {
  test("isn't palindrome", () => {
    const str = "しんぶしし";
    const result: boolean = new Palindrome(str).isPalindrome();
    expect(result).toBeFalsy();
  });

  test("like number", () => {
    const str = "123456789";
    const result: boolean = new Palindrome(str).isPalindrome();
    expect(result).toBeFalsy();
  });

  test("symbol", () => {
    const str = "\n!@#$%^&*()\n)(*&^%$#@!";
    const result: boolean = new Palindrome(str).isPalindrome();
    expect(result).toBeFalsy();
  });
});
