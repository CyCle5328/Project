package com.koreait.project.domain;

import java.sql.Date;

public class ShowInfo {
	private Long showNo;
	private String showTitle;
	private String showAuthor;
	private String showDate;
	private String showTime;
	private String inquiringTel;
	private String showLocation;
	
	public ShowInfo() {
		// TODO Auto-generated constructor stub
	}
	public ShowInfo(Long showNo, String showTitle, String showAuthor, String showDate, String showTime,
			String inquiringTel, String showLocation) {
		super();
		this.showNo = showNo;
		this.showTitle = showTitle;
		this.showAuthor = showAuthor;
		this.showDate = showDate;
		this.showTime = showTime;
		this.inquiringTel = inquiringTel;
		this.showLocation = showLocation;
	}

	public Long getShowNo() {
		return showNo;
	}
	public void setShowNo(Long showNo) {
		this.showNo = showNo;
	}
	public String getShowTitle() {
		return showTitle;
	}
	public void setShowTitle(String showTitle) {
		this.showTitle = showTitle;
	}
	public String getShowAuthor() {
		return showAuthor;
	}
	public void setShowAuthor(String showAuthor) {
		this.showAuthor = showAuthor;
	}
	public String getShowDate() {
		return showDate;
	}
	public void setShowDate(String showDate) {
		this.showDate = showDate;
	}
	public String getShowTime() {
		return showTime;
	}
	public void setShowTime(String showTime) {
		this.showTime = showTime;
	}
	public String getInquiringTel() {
		return inquiringTel;
	}
	public void setInquiringTel(String inquiringTel) {
		this.inquiringTel = inquiringTel;
	}
	public String getShowLocation() {
		return showLocation;
	}
	public void setShowLocation(String showLocation) {
		this.showLocation = showLocation;
	}

	@Override
	public String toString() {
		return "ShowInfo [showNo=" + showNo + ", showTitle=" + showTitle + ", showAuthor=" + showAuthor + ", showDate="
				+ showDate + ", showTime=" + showTime + ", inquiringTel=" + inquiringTel + ", showLocation="
				+ showLocation + "]";
	}
}
