package com.cardsapp.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cardsapp.dao.UserRepository;
import com.cardsapp.model.User;

@Service
public class UserService {
	
	@Autowired
	private UserRepository userRepository;
	
	public User save(User user) throws Exception{
		if(user.getAddress() != null) {
			user.getAddress().setUser(user);
		}
		return userRepository.save(user);
	}

	public List<User> getAll() throws Exception{
		return userRepository.findAll();
	}

	public User getById(long id) throws Exception{
		return userRepository.findById(id).get();
	}

	public void removeId(long id) throws Exception{
		userRepository.deleteById(id);
	}

}
