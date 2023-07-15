const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if (array[j] < array[j-1]) {
        [array[j-1], array[j]] = [array[j], array[j-1]]
      } else {
        break;
      }
    }
  }
  return array;
}

insertionSort([8, 5, 2, 9, 5, 6, 3])