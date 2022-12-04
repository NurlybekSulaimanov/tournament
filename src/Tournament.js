import React, { useState } from 'react'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Container } from '@mui/material';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { Link } from "react-router-dom";
import { Button } from '@mui/material';





function Tournament() {
  const [vals, setVals] = useState([
    { name: '', team: '', win: 0, lose: 0, draw: 0, points: 0 },
    { name: '', team: '', win: 0, lose: 0, draw: 0, points: 0 }
  ]);

  const handleChangeInput = (index, event) => {
    const values = [...vals];
    values[index][event.target.name] = event.target.value;
    setVals(values)
  }

  const handleRemoveVals = (index) => {
    if (vals.length > 2) {
      const values = [...vals];
      values.splice(index, 1);
      setVals(values);
    }
  }

  const handleAddVals = () => {
    setVals([...vals, { name: '', team: '', win: 0, lose: 0, draw: 0, points: 0 }])
  }

  return (
    <Container>
      <h1>Add new Player</h1>
      <form>
        {vals.map((val, index) => (
          <div key={index} className='inputField'>
            <TextField
              required
              name='name'
              label="Name"
              value={val.name}
              onChange={event => handleChangeInput(index, event)}
              style={{
                margin: '5px'
              }}
            />
            <TextField
              required
              name='team'
              label="Team"
              value={val.team}
              onChange={event => handleChangeInput(index, event)}
              style={{
                margin: '5px'
              }}
            />
            <IconButton
              onClick={() => handleRemoveVals(index)}
              style={{
                margin: '5px'
              }}
            >
              <RemoveIcon />
            </IconButton>
            <IconButton
              onClick={() => handleAddVals()}
              style={{
                margin: '5px'
              }}
            >
              <AddIcon />
            </IconButton>
          </div>
        ))}
        <Link to="/algo" state={{ vals: vals }} className="link">
          <Button
            style={{
              margin: '10px',
              fontSize: '16px',
            }}>Start Tournament</Button>
        </Link>
      </form>
    </Container>

  )
}
export default Tournament