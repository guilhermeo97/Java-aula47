import { useEffect, useState } from "react";
import Task from "../interfaces/Task";
import TaskServiceFront from "../services/TaskServiceFront";
import { Link } from "react-router-dom";

export default function TaskList() {

    const [taskList, setTaskList] = useState<Task[]>([]);

    useEffect(() => {

        const fetchTaskList = async () => {
            try {
                const response = await TaskServiceFront.getTasks();
                setTaskList(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        fetchTaskList();

    },[]);

    const taskListRows = taskList.map( task =>
        <TaskListRow task={task} key={task.id} deleteTask={() => deleteTask(task.id!)}/>
    );

    const deleteTask = (id: number) => {
        TaskServiceFront.deleteTaskById(id).then(() => {
            setTaskList(taskList.filter((task: Task) => task.id !== id));
        })
        console.log("Task With Id: " + id + " was deleted.");
    };

    return(
        <table>

            <thead>
                <tr>
                    <th>Id</th>
                    <th>Task Name</th>
                    <th>Deadline</th>
                    <th>Is Done</th>
                    <th>Actions</th>
                </tr>
            </thead>

            <tbody>
                {taskListRows}
            </tbody>

        </table>
    );
}

interface TaskListRowProps {
    task: Task;
    deleteTask: any;
}

function TaskListRow(props: TaskListRowProps){

    return(
        <tr>
            <td>{props.task.id}</td>
            <td><Link to={"/" + props.task.id}>{props.task.name}</Link></td>
            <td>{props.task.deadlineDate}</td>
            <td><input type="checkbox" checked={props.task.done} disabled={true}></input></td>
            <td>
                <button onClick={props.deleteTask}> delete </button>
            </td>
        </tr>
    );
} 