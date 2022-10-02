import React from "react";
import Exercise from './Exercise';
import { Table, TableContainer, TableBody, TableCell, TableHead, TableRow } from '@mui/material';
import Paper from '@mui/material/Paper';

function ExerciseList({ exercises, onDelete, onEdit }) {
    return (
        <TableContainer component={Paper}>
            <Table size="medium">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Reps</TableCell>
                        <TableCell>Weight</TableCell>
                        <TableCell>Unit</TableCell>
                        <TableCell>Date</TableCell>
                        <TableCell>Edit</TableCell>
                        <TableCell>Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {exercises.map((exercise, i) => <Exercise exercise={exercise}
                        onDelete={onDelete}
                        onEdit={onEdit}
                        key={i} />)}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default ExerciseList;