// n = str.length 2n => n O(n)

class Palindrome {
  str: string;
  constructor(str: string) {
    this.str = str;
  }

  reverseString = (): string => this.str.split("").reverse().join("");

  isPalindrome = (): boolean => {
    const reversed = this.reverseString();

    return this.str === reversed;
  };
}

export default Palindrome;
