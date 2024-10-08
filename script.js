/////////////////////////////
// 1.Two sum

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

/////////////////////////////////////
// 2.Add Two Numbers

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

class Node {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

var addTwoNumbers = function (l1, l2) {
  let carry = 0;
  let dummy = new Node(0);
  let current = dummy;

  while (l1 !== null || l2 !== null || carry !== 0) {
    let sum = carry;
    if (l1 !== null) {
      sum += l1.val;
      l1 = l1.next;
    }
    if (l2 !== null) {
      sum += l2.val;
      l2 = l2.next;
    }
    carry = Math.floor(sum / 10);
    current.next = new Node(sum % 10);
    current = current.next;
  }
  return dummy.next;
};

///////////////////////////////
// 9.Palindrome number

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
// 12.Integer to roman

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
// 13.Roman to Integer

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

////////////////////////////////////
// 14.Longest Common Prefix

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  let prefix = strs[0];
  for (let i = 1; i < strs.length; i++) {
    while (strs[i].indexOf(prefix) !== 0) {
      prefix = prefix.substring(0, prefix.length - 1);
      if (prefix === "") return "";
    }
  }
  return prefix;
};

//////////////////////////////////////
// 20.Valid Parentheses

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
// 21.Merge Two Sorted Lists

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  if (!list1) return list2;
  else if (!list2) return list1;
  else if (list1.val <= list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

////////////////////////////////////////
// 26.Remove Duplicates from Sorted Array

var removeDuplicates = function (nums) {
  if (nums.length === 0) return 0;

  let k = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[k - 1] !== nums[i]) {
      nums[k] = nums[i];
      k++;
    }
  }
  return k;
};

removeDuplicates([1, 2, 3, 3, 3, 4]);

///////////////////////////////////////
// 27.Remove Element

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};

////////////////////////////////////
// 28.Find the Index of the First Occurrence in a String

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  if (needle.length > haystack.length) return -1;
  for (let i = 0; i <= haystack.length - needle.length; i++) {
    if (haystack.slice(i, i + needle.length) == needle) {
      return i;
    }
  }
  return -1;
};

/////////////////////////////////////////
// 35.Search Insert Position

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (nums[i] > target) {
      return i;
    }
  }
  return nums.length;
};

/////////////////////////////////////////
// 58.Length of Last Word

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let trimmedString = s.trim();
  let arr = trimmedString.split(" ");
  let lastWord = arr[arr.length - 1];
  return lastWord.length;
};

//////////////////////////////////////
// 66. Plus One

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let numberStr = digits.join("");
  let incrementedNumber = BigInt(numberStr) + 1n;
  return incrementedNumber.toString().split("").map(Number);
};

////////////////////////////////////
// 67. Add Binary

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let decSum = BigInt(`0b${a}`) + BigInt(`0b${b}`);
  return decSum.toString(2);
};

//////////////////////////////////////
// 69. Sqrt(x)

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  let y = Math.sqrt(x);
  return Math.floor(y);
};

///////////////////////////////////////////
// 70. Climbing Stairs

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  if (n == 1) {
    return 1;
  }

  let oneStep = 1;
  let twoStep = 1;
  total = 0;

  for (let i = 2; i <= n; i++) {
    total = oneStep + twoStep;
    twoStep = oneStep;
    oneStep = total;
  }
  return oneStep;
};

///////////////////////////////////////
// 83. Remove Duplicates from Sorted List

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  if (!head) return;
  if (!head.next) return head;
  let temp = head;
  while (temp.next) {
    if (temp.value === temp.next.value) {
      temp.next = temp.next.next;
    } else {
      temp = temp.next;
    }
  }
  return head;
};

//////////////////////////////////
// 88. Merge Sorted Array

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;

  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i -= 1;
    } else {
      nums1[k] = nums2[j];
      j -= 1;
    }
    k--;
  }
  while (j >= 0) {
    nums1[k] = nums2[j];
    j -= 1;
    k--;
  }
};

////////////////////////////////////////////
// 125. Valid Palindrome

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome2 = function (s) {
  const cleanString = s.replace(/[^a-zA-Z0-9]/g, "");
  const lowerCase = cleanString.toLowerCase();

  let str = "";
  for (let i = lowerCase.length - 1; i >= 0; i--) {
    str = str + lowerCase[i];
  }
  return str === lowerCase;
};

//////////////////////////////
// 136. Single Number

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let result = 0;

  for (let i = 0; i < nums.length; i++) {
    result = result ^ nums[i];
  }
  return result;
};

//////////////////////////////
// 2235.Add Two Integers

/**
 * @param {number} num1
 * @param {number} num2
 * @return {number}
 */
var sum = (num1, num2) => num1 + num2;

/////////////////////////////
// 2582.Pass the Pillow

/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
// var passThePillow = function (n, time) {
//   if (n >= time) {
//     return time + 1;
//   }
//   return 2 * n - time - 1;
// };

var passThePillow = function (n, time) {
  let effectiveTime = time % (2 * n - 2);
  if (effectiveTime < n) {
    return effectiveTime + 1;
  } else {
    return 2 * n - effectiveTime - 1;
  }
};

/////////////////////////////////
// 2620.Counter

/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function (n) {
  --n;
  return function () {
    return ++n;
  };
};

// const counter = createCounter(10)
// counter() // 10
// counter() // 11
// counter() // 12

function steps(arr, n) {
  let low = arr[0];
  let high = arr[arr.length - 1];
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    if (n < mid) {
      high = mid - 1;
    } else if (n > mid) {
      low = mid + 1;
    } else {
      return arr.indexOf(mid);
    }
  }
  return null;
}

console.log(steps([0, 1, 2, 3, 9, 10, 12, 34], 12));
