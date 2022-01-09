package com.koreait.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.koreait.project.dao.EmpDao;
import com.koreait.project.vo.EmpVO;


@RestController
@RequestMapping("/")
public class EmpController {
   @Autowired
   EmpDao dao;
   
   @GetMapping
   public List<EmpVO> list(){
      return dao.empList();
   }
}