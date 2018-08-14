package com.cardsapp.controller;

import java.util.List;

import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cardsapp.model.User;
import com.cardsapp.service.UserService;

@RestController
@RequestMapping("/api/user")
public class UserController {
	
	@Autowired
	private UserService userService; 
	
	@PostMapping
	public User createUser(@Valid @RequestBody User user) throws Exception{
		return userService.save(user);
	}
	
	/*@PostMapping
	public ResponseEntity<User> create(@RequestBody User user) throws Exception{
		ResponseEntity<User> response = new ResponseEntity<User>(userService.save(user), HttpStatus.CREATED);
		return response;
	}*/
	
	@GetMapping
	public List<User> getAll() throws Exception{
		return userService.getAll();
	}
	
	@GetMapping("{id}")
	public User getById(@PathVariable("id") long id) throws Exception{
		return userService.getById(id);
	}
	
	@PutMapping
	public User updateUser(@RequestBody User user) throws Exception{
		return userService.save(user);
	}
	
	@DeleteMapping("{id}")
	public HttpStatus delete(@PathVariable("id") long id) throws Exception{
		userService.removeId(id);
		return HttpStatus.OK;
	}

}
