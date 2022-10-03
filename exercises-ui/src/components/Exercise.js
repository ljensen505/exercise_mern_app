import React from "react";
import { FaSkull, FaEdit } from 'react-icons/fa';
import { TableRow, TableCell, Button } from '@mui/material';

function Exercise({ exercise, onDelete, onEdit }) {
    return (
        <TableRow>
            <TableCell>{ exercise.name }</TableCell>
            <TableCell>{ exercise.reps }</TableCell>
            <TableCell>{ exercise.weight }</TableCell>
            <TableCell>{ exercise.unit }</TableCell>
            <TableCell>{ exercise.date }</TableCell>
            <TableCell><Button><FaEdit onClick={ () => onEdit(exercise)}/></Button></TableCell>
            <TableCell><Button><FaSkull onClick={ () => onDelete(exercise._id) }/></Button></TableCell>
        </TableRow>
    );
}

export default Exercise;