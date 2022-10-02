// import { Link } from 'react-router-dom';
import { GiRunningShoe } from 'react-icons/gi';
import { Container, Link } from '@mui/material';

function Navigation() {
    return (
        <Container>
            <Link href={"/"}>Home</Link>
            <GiRunningShoe className={"shoe"}/>
            <Link href={"/add-exercise"}>New</Link>
        </Container>
    )
}

export default Navigation