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
const field = document.querySelector(".card");
async function getCode(word) {
  let response = await fetch(
    `https://en.wikipedia.org/w/api.php?action=query&list=search&prop=info&origin=*&srlimit=25&utf8=&format=json&srsearch=${word}`
  );
  const req = await response.json();
  console.log(req);
  req.query.search.map((obj) => {
    field.innerHTML += `<h1><a href = "https://en.wikipedia.org/?curid=${obj.pageid}">${obj.title}</a></h1>
    <p>${obj.snippet}</p><hr>`;
  });
}
getCode("Tashkent");
