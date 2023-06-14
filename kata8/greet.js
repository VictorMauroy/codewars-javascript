/* Description :
Make a function that will return a greeting statement that uses an input; 
your program should return, "Hello, <name> how are you doing today?".
 */

const greet = (name = prompt("Enter your name : ", "")) => `Hello, ${name} how are you doing today?`
//OH, prompt wasn't required.

/* Best solution :
    function greet(name){
        return `Hello, ${name} how are you doing today?`;
    }
 */