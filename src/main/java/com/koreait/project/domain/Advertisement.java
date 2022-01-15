package com.koreait.project.domain;

public class Advertisement {
	private Long adNo;
	private String adType;
	private String adTitle;
	private String adPath;
	private String adExplain;
	
	public Advertisement() {
		// TODO Auto-generated constructor stub
	}

	public Long getAdNo() {
		return adNo;
	}

	public void setAdNo(Long adNo) {
		this.adNo = adNo;
	}

	public String getAdType() {
		return adType;
	}

	public void setAdType(String adType) {
		this.adType = adType;
	}

	public String getAdTitle() {
		return adTitle;
	}

	public void setAdTitle(String adTitle) {
		this.adTitle = adTitle;
	}

	public String getAdPath() {
		return adPath;
	}

	public void setAdPath(String adPath) {
		this.adPath = adPath;
	}

	public String getAdExplain() {
		return adExplain;
	}

	public void setAdExplain(String adExplain) {
		this.adExplain = adExplain;
	}

	@Override
	public String toString() {
		return "Advertisement [adNo=" + adNo + ", adType=" + adType + ", adTitle=" + adTitle + ", adPath=" + adPath
				+ ", adExplain=" + adExplain + "]";
	}
	
}
