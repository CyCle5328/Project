package com.koreait.project.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.koreait.project.service.ShowInfoService;

@RestController
public class ShowInfoController {
	
	@Autowired
	ShowInfoService showInfoService;
	
	@GetMapping(value = "api/showInfo/{showNo}")
	public Map<String,  Object> findShowInfo(@PathVariable (value = "showNo") Long showNo){
		return showInfoService.selectShowInfo(showNo);
	}
}	
