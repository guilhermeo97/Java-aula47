package com.t3.springbackend.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.t3.springbackend.entity.Task;
import com.t3.springbackend.repository.TaskRepository;

@Service
//serve para adicionar a lógica do back-end
public class TaskService {
    
    @Autowired
    private TaskRepository taskRepository;

    public Task findTaskById(Long id){
        //Existe uma chance de não encontrar o objeto
        //por isso usamos o Optional
        Optional<Task> optTask = taskRepository.findById(id);
        if(optTask.isPresent()){
            return optTask.get();
        } else{
            return null;
        }
    }

    public List<Task> findAllTasks(){
        return taskRepository.findAll();
    }

    public Task createTask(Task task){
        return taskRepository.save(task);
    }

    public void deleteTask(Long id){
        Optional<Task> optTask = taskRepository.findById(id);
        if (optTask.isPresent()) {
        }{
            taskRepository.deleteById(id);
        }
    }

    public Task updateTask(Task task, Long id) {
        if(id == task.getId())
        {
            return taskRepository.save(task);
        }
        
        return null;
    }


}
