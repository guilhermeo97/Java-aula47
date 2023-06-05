package com.t3.springbackend.entity;

import java.util.Date;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name = "task")
@Getter @Setter @NoArgsConstructor @AllArgsConstructor
public class Task {
    
    @Id
    @GeneratedValue
    private long id;

    private String name;

    private String description;

    @Column(name = "is_done")
    private boolean isDone;

    @Column(name = "creation_date")
    private Date creationDate;

    @Column(name = "update_date")
    private Date updateDate;

    @Column(name = "deadline_date")
    private Date deadlineDate;
}
