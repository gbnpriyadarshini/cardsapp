package com.cardsapp.model;

import java.io.Serializable;
import java.time.LocalDateTime;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.Data;

@Entity
@Data
public class Card implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;
	private String fName;
	private String lName;
	private String mName;
	private String phone;
	private String cell;
	private String fax;
	private String email;
	private int voteCount;
	private LocalDateTime creationDate;
	private LocalDateTime updationDate;
	private String createdBy;
	private String updatedBy;
	
}
