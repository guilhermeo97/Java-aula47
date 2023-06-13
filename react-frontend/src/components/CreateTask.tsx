import { useState } from "react";
import Task from "../interfaces/Task";
import TaskServiceFront from "../services/TaskServiceFront";
import { useNavigate } from "react-router-dom";

export default function CreateTask() {

    const [task, setTask] = useState<Task>({
        id: undefined,
        name: "",
        description: "",
        creationDate: "",
        updateDate: "",
        deadlineDate: "",
        done: false,
    });

    const handleChange = (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        setTask({...task, [e.target.name]: e.target.value})
    };

    const navigate = useNavigate();

    const saveTask = (e : any) => {
        e.preventDefault();
        TaskServiceFront.saveTask(task)
            .then((response) => {
                console.log(response);
                navigate("/")
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return(
        <>
            <h2 className="text-2xl">Create Task</h2>

            <div className="flex flex-col">

                <div className="flex py-1">
                    <label className="mr-2">Name: </label>
                    <input
                        className="border-black border-2 rounded" 
                        type="text" 
                        name="name"
                        placeholder="name..."
                        value={task.name}
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <div className="flex py-1">
                    <label className="mr-2">Description: </label>
                    <textarea 
                        className="border-black border-2 rounded h-36 w-48" 
                        name="description"
                        placeholder="description..."
                        value={task.description}
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <div className="flex py-1">
                    <label className="mr-2">Deadline: </label>
                    <input
                        className="border-black border-2 rounded"
                        type="datetime-local"
                        name="deadlineDate"
                        value={task.deadlineDate}
                        onChange={(e) => handleChange(e)}
                    />
                </div>

                <div className="flex py-1">
                    <button className="border-black border-2 rounded px-4 uppercase font-medium bg-green-400 focus:bg-green-500 hover:bg-green-500" onClick={saveTask}>Add</button>
                </div>

            </div>
        </>
    );

}