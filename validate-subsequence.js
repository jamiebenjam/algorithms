// const validateSubsequence = (array, sequence) => {
//   let seqIdx = 0;
//   let arrIdx = 0;
//   while (arrIdx < array.length && seqIdx < sequence.length) {
//     if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
//     arrIdx++;
//   }
//   return seqIdx === sequence.length;
// }

// validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])

// twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)

const validateSubsequence = (array, sequence) => {
  let seqIdx = 0;
  for (const value of array) {
    if (seqIdx === sequence.length) break;
    if (sequence[seqIdx] === value) seqIdx++;
  }
  return seqIdx === sequence.length;
}

validateSubsequence([5, 1, 22, 25, 6, -1, 8, 10], [1, 6, -1, 10])