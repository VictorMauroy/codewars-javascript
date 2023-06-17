/* Description :
Return the number (count) of vowels in the given string.

We will consider a, e, i, o, u as vowels for this Kata (but not y).

The input string will only consist of lower case letters and/or spaces.
*/

function getCount(str) {
    let vowel = ['a','e', 'u', 'i' , 'o'];
    let vowelCount = 0;
    for (let char in str) {
      if (vowel.includes(str[char])) vowelCount++;
    }
    return vowelCount;
}