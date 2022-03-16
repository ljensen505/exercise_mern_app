import { Link } from 'react-router-dom'
import { GiRunningShoe } from 'react-icons/gi'

function Navigation() {
    return (
        <nav>
            <Link to={"/"}>Home</Link>
            <GiRunningShoe className={"shoe"}/>
            <Link to={"/add-exercise"}>New</Link>
        </nav>
    )
}

export default Navigation