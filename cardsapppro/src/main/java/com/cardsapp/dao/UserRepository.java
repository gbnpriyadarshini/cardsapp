package com.cardsapp.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.cardsapp.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {

}
