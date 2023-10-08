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

console.log(isPalindrome(-1221));
