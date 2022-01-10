package com.koreait.project.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.koreait.project.domain.ShowInfo;
import com.koreait.project.repository.ShowInfoRepository;

@Service
public class ShowInfoServiceImpl implements ShowInfoService {
	
	@Autowired
	ShowInfoRepository repository;
	
	@Override
	public Map<String, Object> selectShowInfo(Long showNo) {
	
		ShowInfo showInfo = repository.selectShowInfoByNo(showNo);
		Map<String, Object> map = new HashMap<>();
		map.put("showInfo", showInfo);
		return map;
	}

}
