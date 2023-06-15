/* Description :
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.

Examples
[7] should return 7, because it occurs 1 time (which is odd).
[0] should return 0, because it occurs 1 time (which is odd).
[1,1,2] should return 2, because it occurs 1 time (which is odd).
[0,1,0,1,0] should return 0, because it occurs 3 times (which is odd).
[1,2,2,3,3,3,4,3,3,3,2,2,1] should return 4, because it appears 1 time (which is odd).
*/

/**
 * Check for each numbers in a given array if there is one that appear an odd  number of times.
 * @param {Array[Number]} numArr Array of numbers to check.
 * @returns number that appeared an odd number of times
 */
function findOdd(numArr) {
  
    let numberOccurence = new Map();
    
    for (let num of numArr){
      if(numberOccurence.has(num)){
        numberOccurence.set(num, numberOccurence.get(num)+1);
      } else {
        numberOccurence.set(num, 1);
      }
    }
    
    for (const [key, value] of numberOccurence.entries()) {
      if(value % 2 != 0) return key;
    }
}