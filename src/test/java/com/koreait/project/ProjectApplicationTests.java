package com.koreait.project;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.koreait.project.repository.AdvertiseRepository;

@SpringBootTest
class ProjectApplicationTests {
	
	@Autowired
	AdvertiseRepository repository;
	
	@Test
	void contextLoads() {
		
	}

}
