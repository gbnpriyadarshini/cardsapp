package com.cardsapp.service;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.cardsapp.dao.CardRepository;
import com.cardsapp.model.Card;

@Service
public class CardService {
	
	@Autowired
	private CardRepository cardRepository;
	
	public Card save(Card card) throws Exception{
		if(card.getId() == null) {
			card.setCreationDate(LocalDateTime.now());
		}
		card.setUpdationDate(LocalDateTime.now());
		return cardRepository.save(card);
	}

	public List<Card> getAll() throws Exception{
		return cardRepository.findAll();
	}

	public Card getById(long id) throws Exception{
		return cardRepository.findById(id).get();
	}

	public void removeId(long id) throws Exception{
		cardRepository.deleteById(id);
	}

}
