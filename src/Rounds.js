import React from 'react'
import { useState } from 'react'
import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import { Link } from "react-router-dom";

function Rounds(props) {

    const [games, setGames] = useState(props.data)

    const teams = props.teams

    const handleChangeInput1 = (index, event) => {
        const values = [...games]
        values[index].team1Score = event.target.value.replace(/\D/g, '');
        setGames(values)
    }
    const handleChangeInput2 = (index, event) => {
        const values = [...games]
        values[index].team2Score = event.target.value.replace(/\D/g, '');
        setGames(values)
    }


    return (
        <Container>
            <h2>Rounds:</h2>
            <form>
                {games.map((game, index) => (
                    <div key={index}>
                        <h2>{game.team1} Vs {game.team2}</h2>
                        <TextField
                            name='Score1'
                            value={game.team1Score}
                            required
                            onChange={event => handleChangeInput1(index, event)}
                        />
                        <TextField
                            name='Score2'
                            value={game.team2Score}
                            required
                            onChange={event => handleChangeInput2(index, event)}
                        />
                    </div>
                ))}
                <Link to="/results" state={{ result: games, teams: teams }} className="link">
                    Calculate results
                </Link>
            </form>
        </Container>
    )
}

export default Rounds