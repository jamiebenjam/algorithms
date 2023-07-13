function commonCharacters(strings) {
  const charCount = {};
  for (const string of strings) {
    const uniqueStringCharacters = new Set(string);
    for (const character of uniqueStringCharacters) {
      if (!(character in charCount)) {
        charCount[character] = 0
      }
      charCount[character]++;
    }
  }

  const finalCharacters = [];
  for (const [character, count] of Object.entries(charCount)) {
    if (count === strings.length) {
      finalCharacters.push(character)
    }
  }
  return finalCharacters;
}