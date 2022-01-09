package com.koreait.project.vo;

import javax.validation.constraints.Min;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Size;

public class EmpVO {
   @NotNull @Min(0) private Integer empno;
   @Size(max=10) private String ename;
   @Size(max=9) private String job;
    private Integer mgr;
   @Size(max=7) private String hiredate;
    private Integer sal;
    private Integer comm;
    private Integer deptno;
   public Integer getEmpno() {
      return empno;
   }
   public void setEmpno(Integer empno) {
      this.empno = empno;
   }
   public String getEname() {
      return ename;
   }
   public void setEname(String ename) {
      this.ename = ename;
   }
   public String getJob() {
      return job;
   }
   public void setJob(String job) {
      this.job = job;
   }
   public Integer getMgr() {
      return mgr;
   }
   public void setMgr(Integer mgr) {
      this.mgr = mgr;
   }
   public String getHiredate() {
      return hiredate;
   }
   public void setHiredate(String hiredate) {
      this.hiredate = hiredate;
   }
   public Integer getSal() {
      return sal;
   }
   public void setSal(Integer sal) {
      this.sal = sal;
   }
   public Integer getComm() {
      return comm;
   }
   public void setComm(Integer comm) {
      this.comm = comm;
   }
   public Integer getDeptno() {
      return deptno;
   }
   public void setDeptno(Integer deptno) {
      this.deptno = deptno;
   }
    
}