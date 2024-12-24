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
