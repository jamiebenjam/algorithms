const palindromeCheck = (string) => {
  return string === string.split('').reverse().join('')
}

palindromeCheck("abcdcba")

// const palindromeCheck = (string) => {
//   let j = string.length - 1;
//   let splitString = string.split('');
//   for (i = 0; i < string.length - 1; i++) {
//     if (splitString[i] !== splitString[j]) {
//       return false;
//     }
//     j--;
//   }
//   return true;
// }

// palindromeCheck("abcdcba")
