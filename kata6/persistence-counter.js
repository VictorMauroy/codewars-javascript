/* Description :
Write a function, persistence, that takes in a positive parameter num and returns its 
multiplicative persistence, which is the number of times you must multiply the digits in 
num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2)
4 --> 0 (because 4 is already a one-digit number)
*/

function persistence(num) {
    let persistenceCount = 0;
  
    let waitingQueue = [num];
    
    while(waitingQueue.length > 0){
      if(waitingQueue[0] < 10) break;
    
      let numStr = String(waitingQueue[0]);
      let splitNum = numStr.split('');
      let multiplyEvery = splitNum.reduce( (acc, currentNum) => acc * Number(currentNum), 1);
      
      persistenceCount++;
      waitingQueue.shift();
      waitingQueue.push(multiplyEvery);
    }
    return persistenceCount;
}