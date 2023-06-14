/* 
Your task is to make two functions 
( max and min, or maximum and minimum, etc., depending on the language ) 
that receive a list of integers as input, 
and return the largest and lowest number in that list, respectively.
*/

var min = function(arr){
    minValue = Infinity
    for(let i = 0; i < arr.length; i++)
    {
      if(arr[i] < minValue) minValue = arr[i];
    }
    return minValue;
}

var max = function(arr){
    maxValue = -Infinity
    for(let i = 0; i < arr.length; i++)
    {
      if(arr[i] > maxValue) maxValue = arr[i];
    }
    return maxValue;
}

/* Best : 
const min = (list) => Math.min(...list);
const max = (list) => Math.max(...list);
*/