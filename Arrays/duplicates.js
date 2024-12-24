// Find duplicates in an array return true or false

const nums = [4, 3, 2, 7, 8, 2, 3, 1];

function duplicates(nums) {
  const newNums = new Set(nums);
  console.log(newNums);
  if (newNums.size !== nums.length) {
    return true;
  }
  return false;
}

console.log(duplicates(nums));

//time complexity O(n)
