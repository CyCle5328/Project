package com.koreait.project.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.koreait.project.domain.Advertisement;

@Mapper
public interface AdvertiseRepository {
	public List<Advertisement> selectAllAdvertise();
}
