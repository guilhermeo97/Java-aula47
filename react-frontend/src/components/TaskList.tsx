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
        <table className="border-black border-2 min-w-full">

            <thead className="bg-gray-200">
                <tr>
                    <th className="text-left font-medium text-gray-500 uppercase py-3 px-6">Id</th>
                    <th className="text-left font-medium text-gray-500 uppercase py-3 px-6">Task Name</th>
                    <th className="text-left font-medium text-gray-500 uppercase py-3 px-6">Deadline</th>
                    <th className="text-left font-medium text-gray-500 uppercase py-3 px-6">Is Done</th>
                    <th className="text-left font-medium text-gray-500 uppercase py-3 px-6">Actions</th>
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

    const formatedDate = new Date(props.task.deadlineDate).toLocaleString('pt-BR', { timeZone: 'UTC' });

    return(
        <tr className="odd:bg-white even:bg-slate-50">
            <td className="text-left px-6 py-4 whitespace-nowrap">{props.task.id}</td>
            <td className="text-left px-6 py-4 whitespace-nowrap"><Link className="text-indigo-400 hover:text-indigo-600 focus:text-indigo-600" to={"/" + props.task.id}>{props.task.name}</Link></td>
            <td className="text-left px-6 py-4 whitespace-nowrap"> {formatedDate} </td>
            <td className="text-left px-6 py-4 whitespace-nowrap"><input type="checkbox" checked={props.task.done} disabled={true}></input></td>
            <td className="text-left px-6 py-4 whitespace-nowrap">
                <button className="text-red-400 hover:text-red-600 focus:text-red-600" onClick={props.deleteTask}> delete </button>
            </td>
        </tr>
    );
} 