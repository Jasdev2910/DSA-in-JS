// Find the missing number in an array return the missing number

const nums = [9, 6, 4, 2, 3, 5, 7, 0, 1];

// brute force approach

function missingNumber(nums) {
  nums.sort();
  console.log(nums);

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== i) {
      return i;
    }
  }
}

console.log(missingNumber(nums));

//time complexity O(nlogn)

// now the array has duplicates and multiple misiing numbers
// so we can't use the above approach
// we can use the set data structure

const nums2 = [9, 6, 2, 3, 5, 7, 0, 1];

function missingNumber(nums) {
  const set = new Set(nums); // Store all numbers in a set
  const result = []; // To store missing numbers
  const maxNum = Math.max(...nums); // Find the maximum number in the array

  console.log(set);

  for (let i = 0; i <= maxNum; i++) {
    // Loop from 0 to maxNum
    if (!set.has(i)) {
      result.push(i); // If the set doesn't have the number, it's missing
    }
  }

  return result;
}

console.log(missingNumber(nums2));

//time complexity O(n)
