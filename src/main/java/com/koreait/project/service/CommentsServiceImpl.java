package com.koreait.project.service;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.stereotype.Service;

import com.koreait.project.domain.Comments;
import com.koreait.project.repository.CommentsRepository;

@Service
public class CommentsServiceImpl implements CommentsService {
	
	private CommentsRepository repository;
	
	public CommentsServiceImpl(SqlSessionTemplate sqlSession) {
		repository = sqlSession.getMapper(CommentsRepository.class);
	}
	// 댓글 목록 메소드
	@Override
	public Map<String, Object> findComment(Long reviewNo) {
		// System.out.println("service reviewNo: " + reviewNo);
		List<Comments> list = repository.selectCommentsListByReviewNo(reviewNo);
		System.out.println("결과 list:" + list);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("list", list);
		return map;
	}
	// 댓글 등록 메소드
	@Override
	public Map<String, Object> addComment(Comments comments) {
		int result = repository.insertComments(comments);
		// System.out.println(comments);
		Map<String, Object> m = new HashMap<String, Object>();
		m.put("result", result);
		return m;
	}
	// 댓글 수정 메소드
	@Override
	public Map<String, Object> modifyComment(Comments comments) {
		int result = repository.updateComments(comments);
		System.out.println("겨열과: " + comments);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("result", result);
		return map;
	}
	// 댓글 삭제 메소드
	@Override
	public Map<String, Object> removeComment(Long commentNo) {
		int result = repository.deleteComments(commentNo);
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("result", result);
		return map;
	}

}
