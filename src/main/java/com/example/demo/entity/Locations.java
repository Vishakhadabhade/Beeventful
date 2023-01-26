package com.example.demo.entity;

import java.util.List;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;


@Data
@Entity
@AllArgsConstructor
public class Decorators {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY) 
	private Long id;
	
	@NotBlank(message = "Name is required field")
	private String name;
	
	@Column(nullable=false , unique=true)
	private String decoratorsCode;
	
	private Long indoorDecor;
	
	private Long outdoorDecor;
	
	@OneToMany(mappedBy= "decorators" ,cascade = CascadeType.ALL)
	List <Events> events ;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDecoratorsCode() {
		return decoratorsCode;
	}

	public void setDecoratorsCode(String decoratorsCode) {
		this.decoratorsCode = decoratorsCode;
	}

	public Long getIndoorDecor() {
		return indoorDecor;
	}

	public void setIndoorDecor(Long indoorDecor) {
		this.indoorDecor = indoorDecor;
	}

	public Long getOutdoorDecor() {
		return outdoorDecor;
	}

	public void setOutdoorDecor(Long outdoorDecor) {
		this.outdoorDecor = outdoorDecor;
	}

	public List<Events> getEvents() {
		return events;
	}

	public void setEvents(List<Events> events) {
		this.events = events;
	}
	
	
	

}
