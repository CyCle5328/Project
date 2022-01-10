package com.koreait.project.repository;

import org.apache.ibatis.annotations.Mapper;

import com.koreait.project.domain.ShowInfo;

@Mapper
public interface ShowInfoRepository {
	public ShowInfo selectShowInfoByNo(Long showNo);
}
