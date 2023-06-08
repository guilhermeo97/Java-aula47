package com.t3.springbackend.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.t3.springbackend.entity.Task;
import com.t3.springbackend.service.TaskService;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class TaskController {

    @Autowired
    private TaskService taskService;

    @GetMapping("/tasks")
    public List<Task> allTasks(){
        return taskService.findAllTasks();
    }

    @PostMapping("/tasks/new")
    public Task newTask(@RequestBody Task task){
        return taskService.createTask(task);
    }

    @GetMapping("/tasks/{id}")
    public Task getTaskById(@PathVariable Long id) {
        return taskService.findTaskById(id);
    }

    @DeleteMapping("/tasks/{id}")
    public void deleteTaskById(@PathVariable Long id){
        taskService.deleteTask(id);
    }

    @PutMapping("/tasks/{id}")
    public Task updateTaskById(@PathVariable Long id, @RequestBody Task task){
        return taskService.updateTask(task, id);
    }
}
