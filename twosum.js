const twoNumberSum = (array, targetSum) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (targetSum - array[i] === array[j]) {
        return [array[i], array[j]]
      }
    }
  }
}

twoNumberSum([3, 5, -4, 8, 11, 1, -1, 6], 10)

