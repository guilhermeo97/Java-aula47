package com.t3.springbackend.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.t3.springbackend.entity.Task;

//versões anteriores do spring precisam que seja colocado a anaotação @Repository
public interface TaskRepository extends JpaRepository<Task, Long> {
    
}
