/* Description :
There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!
Note:

Your points are not included in the array of your class's points. 
For calculating the average point you may add your point to the given array!
*/

/**
 * Check if a number is better than the average value of an array and return true if yes, false otherwise.
 * @param {Array[Number]} classPoints Array of numbers, points of our class
 * @param {Number} yourPoints Our point, a number
 * @returns true if our points are better than the average of a given array, false otherwise
 */
function betterThanAverage(classPoints, yourPoints) 
{
    classPoints.push(yourPoints);
    sumPoints = 0;
    for (let i=0; i < classPoints.length;i++)
    {
        sumPoints += classPoints[i];
    }

    return sumPoints / classPoints.length < yourPoints;
}

/* Best : 
function betterThanAverage(classPoints, yourPoints) {
  return yourPoints > classPoints.reduce((a, b) => a + b, 0) / classPoints.length; 
}
*/