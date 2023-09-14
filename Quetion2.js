function findMissingNumber(nums) {
    let n = nums.length;
    let expectedResultSum = (n * (n + 1)) / 2;
    let realSum = nums.reduce(function(accumelator, num){
        return accumelator + num}
         ,0);
    return expectedResultSum - realSum;
  }
  
  const nums1 = [3, 0, 1];
  console.log(findMissingNumber(nums1)); 

  const nums2 = [9, 6, 4, 2, 3, 5, 7, 0, 1];
  console.log(findMissingNumber(nums2)); 
  
  const nums3 = [0, 1];
  console.log(findMissingNumber(nums3)); 