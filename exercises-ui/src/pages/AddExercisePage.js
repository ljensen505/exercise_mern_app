import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { GiWeightLiftingUp } from 'react-icons/gi';
import { Button, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material';

export const AddExercisePage = () => {
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('');
    const [date, setDate] = useState('');

    const history = useHistory();

    const addExercise = async () => {
        const newExercise = { name, reps, weight, unit, date };
        const response = await fetch('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 201){
            console.log("Successfully added the exercise!");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        history.push("/");
    };

    return (
        <FormControl variant="filled">
            <Typography variant="h4"><GiWeightLiftingUp/> Add Exercise <GiWeightLiftingUp/></Typography>
            <TextField sx={{ m: 0.5 }} required placeholder={"Exercise"} value={name}
                onChange={e => setName(e.target.value)}/>
            <TextField sx={{ m: 0.5 }} required type="number" placeholder={"Reps"} value={reps}
                   onChange={e => setReps(e.target.value)}/>
            <TextField sx={{ m: 0.5 }} required type="number" placeholder={"Weight"} value={weight}
                   onChange={e => setWeight(e.target.value)}/>
            
            <Select sx={{ m: 0.5 }} label="unit" required onChange={e => setUnit(e.target.value)}>
                <MenuItem value="lbs">lbs</MenuItem>
                <MenuItem value="kgs">kgs</MenuItem>
            </Select>

            <TextField sx={{ m: 0.5 }} type="text" placeholder={"MM-DD-YY"} value={date}
                   onChange={e => setDate(e.target.value)}/>
            <Button variant="contained" onClick={ addExercise }>Add</Button>
        </FormControl>
    )
}

export default AddExercisePage