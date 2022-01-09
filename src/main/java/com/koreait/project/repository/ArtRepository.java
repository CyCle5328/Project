package com.koreait.project.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;
import org.springframework.stereotype.Repository;

import com.koreait.project.domain.ArtWork;
import com.koreait.project.domain.Author;


@Mapper
public interface ArtRepository {
	public int artTotalCount(Map<String, Object> map);
	public List<ArtWork> findArtList(Map<String, Object> map);
	public ArtWork selectArtByNo(Long artNo);
	public int searchArtCnt(Map<String, Object> map);
	public List<ArtWork>searchArtList(Map<String, Object> map);
	public List<ArtWork>selectRadioList(Map<String, Object> map);
	public int selectRadioCnt(Map<String, Object> map);
	public List<Author> autoComplete(String query);
	public List<ArtWork> autoComplete2(String query);
}
