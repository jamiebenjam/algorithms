const tournamentWinner = (competitions, results) => {
  let score = {}
  competitions.map((competitions, i) => {
    let hometeam = competitions[0]
    let awayteam = competitions[1]
      if (results[i] === 0) {
        score[awayteam] ? score[awayteam] +=3 : score[awayteam] = 3
      } else {
        score[hometeam] ? score[hometeam] +=3 : score[hometeam] = 3
      }
  })
  let winner = Object.entries(score).sort((a, b) => b[1] - a[1])[0][0]
  return winner
}

tournamentWinner([["HTML", "C#"], ["C#", "Python"], ["Python", "HTML"]], [0, 0, 1])