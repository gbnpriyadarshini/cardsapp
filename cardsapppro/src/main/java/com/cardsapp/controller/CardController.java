package com.cardsapp.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cardsapp.model.Card;
import com.cardsapp.service.CardService;

@RestController
@RequestMapping("/api/card")
public class CardController {
	
	@Autowired
	private CardService cardService;
	
	@PostMapping
	public ResponseEntity<Card> create(@RequestBody Card card) throws Exception{
		ResponseEntity<Card> response = new ResponseEntity<Card>(cardService.save(card), HttpStatus.CREATED);
		return response;
	}
	
	@GetMapping
	public List<Card> getAll() throws Exception{
		return cardService.getAll();
	}
	
	@GetMapping("{id}")
	public Card getById(@PathVariable("id") long id) throws Exception{
		return cardService.getById(id);
	}
	
	@PutMapping
	public Card updateCard(@RequestBody Card card) throws Exception{
		return cardService.save(card);
	}
	
	@DeleteMapping("{id}")
	public HttpStatus delete(@PathVariable("id") long id) throws Exception{
		cardService.removeId(id);
		return HttpStatus.OK;
	}

}
