import { useState } from "react";
import Task from "../interfaces/Task";
import TaskServiceFront from "../services/TaskServiceFront";

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

    const saveTask = (e : any) => {
        e.preventDefault();
        TaskServiceFront.saveTask(task)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return(
        <>
            <h1>Create Task</h1>

            <div>
                <label>Name: </label>
                <input 
                    type="text" 
                    name="name"
                    placeholder="name..."
                    value={task.name}
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <div>
                <label>Description: </label>
                <textarea 
                    name="description"
                    placeholder="description..."
                    value={task.description}
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <div>
                <label>Deadline: </label>
                <input
                    type="datetime-local"
                    name="deadlineDate"
                    value={task.deadlineDate}
                    onChange={(e) => handleChange(e)}
                />
            </div>

            <div>
                <button onClick={saveTask}>Add</button>
            </div>
        </>
    );

}