/*  Description :
The first century spans from the year 1 up to and including the year 100, the second century - from the year 101 up to and including the year 200, etc.
Task

Given a year, return the century it is in.
Examples

1705 --> 18
1900 --> 19
1601 --> 17
2000 --> 20
*/

/**
 * Convert year to century
 * @param {Number} year Year to convert (year 89 or year 1784)
 * @returns converted value to century
 */
let century = (year) => year % 100 === 0 ? year / 100 : Math.floor(year/100) + 1

// Nice solution : 
//const century = year => Math.ceil(year/100)