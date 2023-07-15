const runLengthEncoding = (string) => {
  let outputString = ""
  let counter = 1;
  let i = 0;
  while (i < string.length) {
    outputString = outputString.concat(counter, string[i]);
    i = counter + i;
    counter = 1;
  }
  return outputString;
}

runLengthEncoding("AAAAAAAAABBCCCCDD")