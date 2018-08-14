package com.cardsapp;

import org.junit.runner.RunWith;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.junit4.SpringRunner;

@RunWith(SpringRunner.class)
@SpringBootTest
public class CardsappproApplicationTests {
/*
	@Autowired
	private CardRepository cardRepository;
	
	@Autowired
	private UserRepository userRepository;
	
	@Test
	public void testCreateCard() {
		Card card = new Card();
		card.setFName("Kashyap");
		card.setLName("Putta");
		cardRepository.save(card);
		
		Address address = new Address();
		address.setState("WI");
		
		User user = new User();
		user.setFName("Kashyap");
		user.setLName("Putta");
		user.setAddress(address);
		
		address.setUser(user);
		user.setAddress(address);
		
		userRepository.save(user);
		
		Optional<Card> card = cardRepository.findById(2L);
		System.out.println(card.get().getFName());
		
	}*/
}
