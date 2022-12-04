import React from 'react'
import { useLocation } from "react-router-dom"
import Rounds from './Rounds';
export default function Algo() {

  const location = useLocation();

  const data = location.state?.vals;

  let plays = []
  for (let i = 0; i < data.length; i++) {
    for (let j = i + 1; j < data.length; j++)
      plays.push({ team1: data[i].team, team2: data[j].team, team1Score: 0, team2Score: 0, key: [Math.floor(Math.random() * 100) + 1] })
  }
  console.log(plays)

  let rounds = []
  if (plays.length > 5) {
    for (let k = 0; k < plays.length / 2; k++) {
      rounds.push(plays[k])
      rounds.push(plays[plays.length - 1 - [k]])
    }
  }
  else{
    rounds = plays
  }
  return (
    <div>
      {<Rounds data={rounds} teams={data} />}
    </div>
  )

}