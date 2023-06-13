import { useEffect, useState } from "react";
import Task from "../interfaces/Task";
import TaskServiceFront from "../services/TaskServiceFront";
import { useNavigate, useParams } from "react-router-dom";

export default function UpdateTask(){

    const [task, setTask] = useState<Task>();
    const [readOnly, setReadOnly] = useState<boolean>(true);

    const { id } = useParams();

    const navigate = useNavigate();

    const handleChange = (e : React.ChangeEvent<HTMLInputElement> | React.ChangeEvent<HTMLTextAreaElement>) => {
        if(task !== undefined){
            setTask({...task, [e.target.name]: e.target.value});
        }
    };

    const handleIsDone = (checked: boolean)  => {
        if(task !== undefined){
            setTask({...task, done: checked});
        }
    };

    const readOnlyToggle = () => {
        setReadOnly(false);
    };

    const deleteTask = () => {
        if(task !== undefined){
            try {
                TaskServiceFront.deleteTaskById(task.id!);
                console.log("Task With Id: " + task.id + " was deleted.");
                navigate("/");
            } catch (error) {
                console.error(error);
            }        
        }
    };

    const updateTask = () => {
        if(task !== undefined){
            TaskServiceFront.updateTaskById(id! , task).then((response) => {
                console.log("Task with id: " + id + " was updated.")
                setTask(response.data);
                setReadOnly(true);
            })
            .catch((error) => {
                console.error(error);
            })
        }
    } 


    useEffect(() => {

        const fetchTask = async () => {
            try {
                const response = await TaskServiceFront.getTaskById(id!);
                const formatedDate = new Date(response.data.deadlineDate).toISOString().slice(0,-5);
                setTask({...response.data, deadlineDate: formatedDate});
            } catch (error) {
                console.error(error);
            }
        };

        fetchTask();

    },[id]);


    if(task !== undefined){
        return(
            <div className="ml-2">
               <h2 className="text-2xl">Task id: {task.id}</h2>
    
                <div className="flex flex-col">

                    <div className="flex py-1">
                        <label className="mr-2">Name: </label>
                        <input 
                            className="border-black border-2 rounded disabled:border-gray-400 disabled:text-gray-400" 
                            type="text" 
                            name="name"
                            placeholder="name..."
                            value={task.name}
                            onChange={(e) => handleChange(e)}
                            disabled={readOnly}
                        />
                    </div>
        
                    <div className="flex py-1">
                        <label className="mr-2">Description: </label>
                        <textarea 
                            className="border-black border-2 rounded h-36 w-48 disabled:border-gray-400 disabled:text-gray-400"  
                            name="description"
                            placeholder="description..."
                            value={task.description}
                            onChange={(e) => handleChange(e)}
                            disabled={readOnly}
                        />
                    </div>
        
                    <div className="flex py-1">
                        <label className="mr-2">Deadline: </label>
                        <input
                            className="border-black border-2 rounded disabled:border-gray-400 disabled:text-gray-400" 
                            type="datetime-local"
                            name="deadlineDate"
                            value={task.deadlineDate}
                            onChange={(e) => handleChange(e)}
                            disabled={readOnly}
                        />
                    </div>

                    <div className="flex py-1"> 
                        <label className="mr-2">
                            Is Done:
                            <input
                            className="ml-2"
                                type="checkbox"
                                checked={task.done}
                                onChange={(e) => handleIsDone(e.target.checked)}
                                disabled={readOnly}
                            />     
                        </label>

                    </div>
        
                    <div className="flex py-1">
                        {readOnly ? 
                            <button 
                                className="border-black border-2 rounded px-4 uppercase font-medium bg-yellow-400 focus:bg-yellow-500 hover:bg-yellow-500"
                                onClick={readOnlyToggle}
                            > Edit </button>
                            :
                            <div className="flex space-x-2">
                                <button 
                                    className="border-black border-2 rounded px-4 uppercase font-medium bg-green-400 focus:bg-green-500 hover:bg-green-500"
                                    onClick={updateTask}
                                > Save </button>
                                <button 
                                    className="border-black border-2 rounded px-4 uppercase font-medium bg-red-400 focus:bg-red-500 hover:bg-red-500"
                                    onClick={deleteTask}
                                > Delete </button>
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }else {
        return(
            <p>erro</p>
        )
    }
    

}