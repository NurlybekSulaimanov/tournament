import React from 'react'
import { useLocation } from "react-router-dom"

function Results() {
    const location = useLocation();

    const data = location.state?.result;

    let teams = location.state?.teams;

    for (let i = 0; i < data.length; i++) {
        if (parseInt(data[i].team1Score) > parseInt(data[i].team2Score)) {
            teams.find(o => o.team === data[i].team1).win = teams.find(o => o.team === data[i].team1).win + 1
            teams.find(o => o.team === data[i].team2).lose = teams.find(o => o.team === data[i].team2).lose + 1
            teams.find(o => o.team === data[i].team1).points = teams.find(o => o.team === data[i].team1).points + 3
        }
        else if (parseInt(data[i].team2Score) > parseInt(data[i].team1Score)) {
            teams.find(o => o.team === data[i].team2).win = teams.find(o => o.team === data[i].team2).win + 1
            teams.find(o => o.team === data[i].team1).lose = teams.find(o => o.team === data[i].team1).lose + 1
            teams.find(o => o.team === data[i].team2).points = teams.find(o => o.team === data[i].team2).points + 3
        }
        else {
            teams.find(o => o.team === data[i].team2).draw = teams.find(o => o.team === data[i].team2).draw + 1
            teams.find(o => o.team === data[i].team1).points = teams.find(o => o.team === data[i].team1).points + 1
            teams.find(o => o.team === data[i].team1).draw = teams.find(o => o.team === data[i].team1).draw + 1
            teams.find(o => o.team === data[i].team2).points = teams.find(o => o.team === data[i].team2).points + 1
        }
    }
    teams = teams.sort((a, b) => b.points - a.points);
    console.log(teams)
    return (
        <div>
            <h1>Results</h1>
            <table div='resultats'
            style={{
                marginLeft:'auto',
                marginRight:'auto',
                fontSize: '25px'
            }}>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Team</th>
                        <th>Win</th>
                        <th>Lose</th>
                        <th>Draw</th>
                        <th>Points</th>
                    </tr>
                </thead>
                <tbody>
                    {teams.map(team => {
                        return (
                            <tr key={team.name}>
                                <td>{team.name}</td>
                                <td>{team.team}</td>
                                <td>{team.win}</td>
                                <td>{team.lose}</td>
                                <td>{team.draw}</td>
                                <td>{team.points}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <h1>Congratulations {teams[0].name}!</h1>
            <h1>You won the tournament!</h1>
        </div>
    )
}

export default Results