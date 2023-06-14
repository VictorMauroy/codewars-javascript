/* Description
Clock shows h hours, m minutes and s seconds after midnight.

Your task is to write a function which returns the time since midnight in milliseconds.

Example:
h = 0
m = 1
s = 1
result = past(h,m,s)
alert(result) // 61000
*/

/**
 * Receive how much time has passed since midnight in hours + minutes + seconds 
 * and return the sum in miliseconds
 * @param {*} h hours past midnight
 * @param {*} m minutes
 * @param {*} s seconds
 * @returns time converted in miliseconds
 */
function past(h, m, s){
    // 3600 sec per hour, 3600 * 1000 ms per hour
    // 60 sec per min, 60 * 1000 per min
    // 1000 ms per second
    return h * 3600000 + m * 60000 + s * 1000
  }