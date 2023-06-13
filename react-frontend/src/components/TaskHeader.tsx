import { Link } from "react-router-dom";

export default function TaskHeader(){
    return (
        <header className="bg-gray-600 h-16 px-8">
            <h1 className="font-mono text-3xl text-white">Task Manager</h1>
            <nav>
                <Link className="text-indigo-400 hover:text-indigo-600 focus:text-indigo-600" to={"/"}>All Tasks</Link>
                {" | "}
                <Link className="text-indigo-400 hover:text-indigo-600 focus:text-indigo-600" to={"/new"}>New Task</Link>
            </nav>
        </header>
    );
};