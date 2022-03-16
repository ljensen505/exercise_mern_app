import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { GiWeightLiftingUp } from 'react-icons/gi'

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
            alert("Successfully added the exercise!");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        history.push("/");
    };

    return (
        <div>
            <h1><GiWeightLiftingUp/> Add Exercise <GiWeightLiftingUp/></h1>
            <input type="text" placeholder={"Exercise"} value={name}
                onChange={e => setName(e.target.value)}/>
            <input type="number" placeholder={"Reps"} value={reps}
                   onChange={e => setReps(e.target.value)}/>
            <input type="number" placeholder={"Weight"} value={weight}
                   onChange={e => setWeight(e.target.value)}/>
            <select name="unit" onChange={e => setUnit(e.target.value)}>
                // This is how I got the unit selector to work. It wouldn't post properly with a default value
                <option value="" selected={"selected"} disabled hidden>Unit</option>
                <option value="lbs" >lbs</option>
                <option value="kgs">kgs</option>
            </select>
            <input type="text" placeholder={"MM-DD-YY"} value={date}
                   onChange={e => setDate(e.target.value)}/>
            <button onClick={addExercise}>Add</button>
        </div>
    )
}

export default AddExercisePage