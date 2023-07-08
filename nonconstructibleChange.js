const nonconstructibleChange = (coins) => {
  coins.sort((a, b) => a - b)
  
  let currentChange = 0;
  for (const coin of coins) {
    if (coin > currentChange + 1) return currentChange + 1;
    
    currentChange += coin;
  }
  return currentChange + 1
}

nonconstructibleChange([5, 7, 1, 2, 3, 22])