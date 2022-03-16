import React from "react";
import { FaSkull, FaEdit } from 'react-icons/fa'

function Exercise({ exercise, onDelete, onEdit }) {
    return (
        <tr>
            <td>{ exercise.name }</td>
            <td>{ exercise.reps }</td>
            <td>{ exercise.weight }</td>
            <td>{ exercise.unit }</td>
            <td>{ exercise.date }</td>
            <td><FaEdit className={"icon"} onClick={ () => onEdit(exercise)}/></td>
            <td><FaSkull className={"icon"} onClick={ () => onDelete(exercise._id) }/></td>
        </tr>
    );
}

export default Exercise;