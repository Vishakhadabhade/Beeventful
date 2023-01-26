package com.example.demo.entity;

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

@Entity
@Data
@AllArgsConstructor

public class Caterers {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY) 
	private Long id;
	
	@NotBlank(message = "Name is required field")
	private String name;
	
	@Column(nullable=false , unique=true)
	private String caterersCode;
	
	private Long pricePerVegPlate;
	
	private Long pricePerNonVegPlate;
	
	@OneToMany(mappedBy= "caterers" ,cascade = CascadeType.ALL)
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

	public String getCaterersCode() {
		return caterersCode;
	}

	public void setCaterersCode(String caterersCode) {
		this.caterersCode = caterersCode;
	}

	public Long getPricePerVegPlate() {
		return pricePerVegPlate;
	}

	public void setPricePerVegPlate(Long pricePerVegPlate) {
		this.pricePerVegPlate = pricePerVegPlate;
	}

	public Long getPricePerNonVegPlate() {
		return pricePerNonVegPlate;
	}

	public void setPricePerNonVegPlate(Long pricePerNonVegPlate) {
		this.pricePerNonVegPlate = pricePerNonVegPlate;
	}
	
	
	
	
}
