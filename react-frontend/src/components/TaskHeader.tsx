import { Link } from "react-router-dom";

export default function TaskHeader(){
    return (
        <header>
            <h1>Task Manager</h1>
            <nav>
                <Link to={"/"}>All Tasks</Link>
                <Link to={"/new"}>New Task</Link>
            </nav>
        </header>
    );
};