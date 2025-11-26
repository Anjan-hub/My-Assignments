/* Given a string s consisting of words and spaces, return the length of the last word in the string.
Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with length 5.
*/

let s= "Hello World"
words = s.split(" ")
lastword = words[words.length-1]
console.log(lastword.length);

/*
Example 2:
Input: s = " fly me to the moon "
Output: 4
Explanation: The last word is "moon" with length 4.
*/
input = " fly me to the moon "
input= input.trim().split(' ')
lastword = input[input.length-1]
console.log(lastword);

/*
Example 3:
Write a function to check if two strings are anagrams.
Input: isAnagram('listen', 'silent')
Output: true
Input: isAnagram('hello', 'world')
Output: false
Explanation: An anagram is when you mix up the letters of a word to make a new one, using all the letters.   */

function isAnagram(str1,str2) {
    str1 = str1.replace(/\s+/g,'').toLowerCase();
    str2 = str2.replace(/\s+/g,'').toLowerCase();
    
    str1 = str1.split('').sort().join('')
    str2 = str2.split('').sort().join('')

    return str1===str2
}

console.log(isAnagram('silent','LIstEn'));
console.log(isAnagram('fdsa','ghjk'));

