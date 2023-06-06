import Task from "../interfaces/Task";

const DUMMY_TASK_LIST: Task[] = [
    {
        "id": 1,
        "name": "Tarefa 1",
        "description": "descriçao tarefa 1",
        "creationDate": "2023-06-06T00:14:53.886+00:00",
        "updateDate": "2023-06-06T00:14:53.886+00:00",
        "deadlineDate": "2023-07-06T00:14:53.886+00:00",
        "done": false
    },
    {
        "id": 2,
        "name": "Tarefa 2",
        "description": "descriçao tarefa 2",
        "creationDate": "2023-06-06T00:14:53.886+00:00",
        "updateDate": "2023-06-06T00:14:53.886+00:00",
        "deadlineDate": "2023-07-06T00:14:53.886+00:00",
        "done": true
    },
    {
      "id": 3,
      "name": "Tarefa 3",
      "description": "descriçao tarefa 3",
      "creationDate": "2023-06-06T00:14:53.886+00:00",
      "updateDate": "2023-06-06T00:14:53.886+00:00",
      "deadlineDate": "2023-07-06T00:14:53.886+00:00",
      "done": false
    }
  ];

export default function TaskList() {

    const taskListRows = DUMMY_TASK_LIST.map( task =>
        <TaskListRow task={task} />
    );

    return(
        <>
            <table>
                <tr>
                    <th>Id</th>
                    <th>Task Name</th>
                    <th>Deadline</th>
                    <th>Is Done</th>
                </tr>

                {taskListRows}

            </table>
        </>
    );
}

interface TaskListRowProps {
    task: Task;
}

function TaskListRow(props: TaskListRowProps){

    return(
        <tr>
            <td>{props.task.id}</td>
            <td>{props.task.name}</td>
            <td>{props.task.deadlineDate}</td>
            <td>{props.task.done ? "True": "False"}</td>
        </tr>
    );
} 