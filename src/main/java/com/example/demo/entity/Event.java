package com.example.demo.entity;

import java.sql.Date;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;

@Entity
@Data
@AllArgsConstructor
public class Event {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY) 
	private Long id;
	
	@NotBlank(message = "EventType is required field")
	private String eventType;
	
	
    private Date eventStartDate;
    
	
    private Date eventEndDate;
	
	@ManyToOne
	@JoinColumn(name="caterers_id" , referencedColumnName="id")
	private Caterers caterers;
	
	@ManyToOne
	@JoinColumn(name="decorators_id" , referencedColumnName="id")
	private Decorators decorators;
	
	@ManyToOne
	@JoinColumn(name="locations_id" , referencedColumnName="id")
	private Locations locations;
    
	
	@ManyToOne
	@JoinColumn(name="users_id" , referencedColumnName="id")
	private Users users;


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}


	public String getEventType() {
		return eventType;
	}


	public void setEventType(String eventType) {
		this.eventType = eventType;
	}


	public Date getEventStartDate() {
		return eventStartDate;
	}


	public void setEventStartDate(Date eventStartDate) {
		this.eventStartDate = eventStartDate;
	}


	public Date getEventEndDate() {
		return eventEndDate;
	}


	public void setEventEndDate(Date eventEndDate) {
		this.eventEndDate = eventEndDate;
	}

	
	
	
    
    
    
    
    
}
