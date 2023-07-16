function runLengthEncoding(string) {
  let outputString = ""
  let count = 1;
  
  for (let i = 0; i < string.length; i++) {
    count++
    if (string[i] !== string[i + 1] || count === 9) {
      outputString = outputString + string[i] + count;
      count = 0;
    }
  }
  return outputString;
}

runLengthEncoding("AAAAAAAAAAAABBCCCCDD")