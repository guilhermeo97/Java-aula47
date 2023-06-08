import axios from "axios";
import Task from "../interfaces/Task";

const TASK_API_BASE_URL = "http://localhost:8080/tasks";

class TaskServiceFront {

    // Faz uma requisição POST enviando um Objeto TASK
    saveTask(task: Task){
        return axios.post(TASK_API_BASE_URL + "/new", task);
    };

    // Faz uma requisição GET retornando todos as tasks do banco
    getTasks() {
        return axios.get(TASK_API_BASE_URL);
    };

    // Faz uma requisição GET retornando uma task por id
    getTaskById(id : string | number) {
        return axios.get(TASK_API_BASE_URL + "/" + id);
    }

    // Faz uma requisição DELETE removendo uma task por id
    deleteTaskById(id : string | number) {
        return axios.delete(TASK_API_BASE_URL + "/" + id);
    }

    // Faz uma requisição PUT atualizando uma task por id
    updateTaskById(id : string | number, task: Task){
        return axios.put(TASK_API_BASE_URL + "/" + id, task);
    }
}

const taskServiceFront = new TaskServiceFront();
export default taskServiceFront;