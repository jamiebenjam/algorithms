const sortedSquares = (array) => {
  const sorted = new Array(array.length).fill(0);
  
  for (let idx = 0; idx < array.length; idx++) {
    const value = array[idx];
    sorted[idx] = value * value
  }
  sorted.sort((a,b) => a-b)
  return sorted
}

sortedSquares([1, 2, 3, 4, 5, 6, 8, 9])