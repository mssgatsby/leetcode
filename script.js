/////////////////////////////
// Two sum

const twoSum = function (nums, target) {
  let numInd = [];
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    let x = target - cur;
    if (x in numInd && numInd[x] != i) return [numInd[x], i];
    numInd[cur] = i;
  }
};

// console.log(twoSum([3, 2, 4], 6));

///////////////////////////////
// Palindrome number

const isPalindrome = function (num) {
  let originalNum = num;
  let reversedNum = 0;

  while (num > 0) {
    let lastDigit = num % 10;
    reversedNum = reversedNum * 10 + lastDigit;
    num = Math.floor(num / 10);
  }
  return originalNum === reversedNum;
};

// console.log(isPalindrome(-1221));

//////////////////////////////////////
// Integer to roman

const intToRoman = function (num) {
  const decimalValues = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const romanNumerals = [
    "M",
    "CM",
    "D",
    "CD",
    "C",
    "XC",
    "L",
    "XL",
    "X",
    "IX",
    "V",
    "IV",
    "I",
  ];

  let romanCon = "";
  for (let i = 0; i < decimalValues.length; i++) {
    while (num >= decimalValues[i]) {
      romanCon += romanNumerals[i];
      num -= decimalValues[i];
    }
  }
  return romanCon;
};

// console.log(intToRoman(104));

//////////////////////////////////
// Roman to integer

const romanToInt = function (roman) {
  const romanToDecimal = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let total = 0;
  let preValue = 0;

  for (let i = roman.length - 1; i >= 0; i--) {
    const curValue = romanToDecimal[roman[i]];

    if (curValue < preValue) {
      total -= curValue;
    } else {
      total += curValue;
    }
    preValue = curValue;
  }
  return total;
};

// console.log(romanToInt("MCMXCIV"));

///////////////////////////////////////
// First and last position

const searchRange = function (arr, target) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(target)) {
      console.log(12);
    }
  }
  return result;
};
// console.log(searchRange([5, 7, 7, 8, 8, 10], 9));

/////////////////////////////////////
// Longest Common Prefix

const longPrefix = function (strs) {
  let result = "";
  for (let str of strs) {
    console.log(str);
  }
};
// console.log(longPrefix(["flower", "flow", "flight"]));

//////////////////////////////////////
// Valid Parentheses

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [];
  const map = {
    "(": ")",
    "[": "]",
    "{": "}",
  };

  for (let char of s) {
    if (map[char]) stack.push(char);
    else {
      const top = stack.pop(char);
      if (map[top] !== char) return false;
    }
  }
  return stack.length === 0;
};

////////////////////////////////////////
// Remove Duplicates from Sorted Array

var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[k + 1] !== nums[i]) {
      nums[k] = nums[i];
      k++;
    }
  }
  console.log(k);
};

removeDuplicates([1, 2, 3, 3, 3, 4]);
