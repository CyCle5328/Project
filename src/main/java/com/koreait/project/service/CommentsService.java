package com.koreait.project.service;

import java.util.Map;

import com.koreait.project.domain.Comments;

public interface CommentsService {
	
	public Map<String, Object> findComment(Long reviewNo);
	public Map<String, Object> addComment(Comments comments);
	public Map<String, Object> modifyComment(Comments comments);
	public Map<String, Object> removeComment(Long commentNo);

}
