package com.koreait.project.repository;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;

import com.koreait.project.domain.Review;

@Mapper
public interface ReviewRepository {
	
	public List<Review> selectReviewListByArtNo(Long artNo);
	public int insertReview(Review review);

}
