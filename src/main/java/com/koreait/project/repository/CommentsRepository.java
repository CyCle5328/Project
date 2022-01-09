package com.koreait.project.repository;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Mapper;

import com.koreait.project.domain.Comments;

@Mapper
public interface CommentsRepository {
	
	public List<Comments> selectCommentsListByReviewNo(Long reviewNo);
	public int insertComments(Comments comments);
	public int updateComments(Comments comments);
	public int deleteComments(Long commentNo);

}
