package com.koreait.project.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.koreait.project.service.AdvertiseService;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class AdvertiseController {

	@Autowired
	AdvertiseService advertiseService;
	
	@GetMapping(value = "api/advertisement")
	public Map<String, Object> findAlladvertise(){
		return advertiseService.FindAlladvertise();
	}
}
