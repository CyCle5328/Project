package com.koreait.project.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.koreait.project.domain.Advertisement;
import com.koreait.project.repository.AdvertiseRepository;

@Service
public class AdvertiseServiceImpl implements AdvertiseService {

	@Autowired
	AdvertiseRepository repository;

	@Override
	public Map<String, Object> FindAlladvertise() {
		List<Advertisement> list= repository.selectAllAdvertise();
		
		Map<String, Object> map = new HashMap<>();
		map.put("list", list);
		
		return map;
	}
	
}
