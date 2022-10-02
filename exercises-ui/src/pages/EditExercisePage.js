import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { GiWeightLiftingUp } from "react-icons/gi";
import { Button, FormControl, MenuItem, Select, TextField, Typography } from '@mui/material';


const EditExercisePage = ({exerciseToEdit}) => {
    const [name, setName] = useState(exerciseToEdit.name);
    const [reps, setReps] = useState(exerciseToEdit.reps);
    const [weight, setWeight] = useState(exerciseToEdit.weight);
    const [unit, setUnit] = useState(exerciseToEdit.unit);
    const [date, setDate] = useState(exerciseToEdit.date);

    const history = useHistory();

    const editExercise = async () => {
        const editedExercise = { name, reps, weight, unit, date }
        const response = await fetch(`/exercises/${exerciseToEdit._id}`, {
            method: 'PUT',
            body: JSON.stringify({ name: name, reps: reps, weight: weight, unit: unit, date: date }),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        if(response.status === 200){
            alert("Successfully edited the exercise!");
        } else {
            alert(`Failed to edit exercise, status code = ${response.status}`);
        }
        history.push("/");
    };

    return (
        <FormControl variant="filled">
            <Typography variant="h4"><GiWeightLiftingUp/> Edit Exercise <GiWeightLiftingUp/></Typography>
            <TextField
            sx={{ m: 0.5 }}
                type="text"
                value={name}
                onChange={e => setName(e.target.value)}/>
            <TextField
            sx={{ m: 0.5 }}
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                value={reps}
                onChange={e => setReps(e.target.value)}/>
                
            <TextField
            sx={{ m: 0.5 }}
                
                inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
                value={weight}
                onChange={e => setWeight(e.target.value)}/>
            <Select
            sx={{ m: 0.5 }}
            
                name="unit" 
                id="units" 
                onChange={e => setUnit(e.target.value)}
                label="unit"
                value={unit}
                >
                <MenuItem value="lbs">lbs</MenuItem>
                <MenuItem value="kgs">kgs</MenuItem>
            </Select>
            <TextField
            sx={{ m: 0.5 }}
                type="text"
                value={date}
                onChange={e => setDate(e.target.value)}/>
            <Button variant="contained" onClick={editExercise}>Save</Button>

        </FormControl>
    )
}

export default EditExercisePage