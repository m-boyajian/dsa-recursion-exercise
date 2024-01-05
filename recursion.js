/** product: calculate the product of an array of numbers. */

function product(nums, index = 0) {
  // Base case: If array is empty, return 1
  if (index === nums.length) {
    return 1;
  }
  return nums[index] * product(nums, index + 1);
}

/** longest: return the length of the longest word in an array of words. */

function longest(words, index =0, currentMax =0) {
  // Base case: if array is empty, return current max length
  if (index === words.length) {
    return currentMax;
  }

  const wordLength = words[index].length;
  const newMax = Math.max(currentMax, wordLength);

  return longest(words, index + 1, newMax);
}

/** everyOther: return a string with every other letter. */

function everyOther(str, index = 0) {
  // Base case: if the index is greater than or equal to the string length, return an empty string
  if (index >= str.length) {
    return '';
  }

  // Include the character at the current index and make a recursive call with an increased index by 2
  return str[index] + everyOther(str, index + 2);
}


/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {
  // Base case: if str has 0 or 1 char, it's a palidrome
  if (str.length <= 1) {
    return true;
  }
  if (str[0] === str[str.length -1]) {
    return isPalindrome(str.slice(1, -1));
  } else {
    return false;
  }
}

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val) {
  // Base case: if value isn't found in the arr, then return -1
  if (index === arr.length) {
    return -1;
  }

  if (arr[index] === val) {
    return index;
  } else {
    return findIndex(arr, val, idx + 1);
  }
}

/** revString: return a copy of a string, but in reverse. */

function revString(str) {
  // Base case: if str has 0 or 1 char, return str
  if (str.length <= 1) {
    return str;
  }

  return str[str.length -1] + revString(str.slice(0, -1));
}

/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  const resultArr = [];

  for (const key in obj) {
    if (typeof obj[key] === 'string') {
      resultArr.push(obj[key]);
    } else if (typeof obj[key] === 'object' && obj[key] !== null) {
    resultArr.push(...gatherStrings(obj[key]));
    }
  }
  return resultArr;
}

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, left = 0, right= arr.length - 1) {
  if (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === val) {
      return mid;
    } else if (arr[mid] < val) {
      return binarySearch(arr, val, mid + 1, right);
    } else {
      return binarySearch(arr, val, left, mid -1);
    }
  }
  return -1;
}

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
