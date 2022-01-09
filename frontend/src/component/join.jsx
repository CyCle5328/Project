import React from 'react'
import styles from './join.module.css'

export const Join = () => {
    return (
        <div className="wrapper">
            <div className={styles.wrap}>
                <div className={styles.subjecet}>
                    <input type="hidden" name="userNo" id="userNo"/>
                    <span className={styles.join_header}>회원가입</span>
                </div>
                <div className="email_wrap">
                    <div className={styles.email_name}>이메일</div>
                    <div className="email_input_box">
                        <input type="text" id={styles.emailId} value="" placeholder="이메일 입력"/> 
                        <span>@</span>
                        <input list={styles.select} id={styles.textEmail} placeholder="이메일을 선택하세요."/> 
                    <div className={styles.email_check}>
                        <datalist id={styles.select}>
                            <option value="" disabled selected>E-Mail 선택</option>
                            <option value="naver.com" id="naver.com">naver.com</option>
                            <option value="hanmail.net" id="hanmail.net">hanmail.net</option>
                            <option value="gmail.com" id="gmail.com">gmail.com</option>
                            <option value="nate.com" id="nate.com">nate.com</option>
                            <option value="직접 입력하기" id="textEmail">직접 입력하기</option>
                        </datalist>
                    </div>
                    </div>
                </div>
                <div className="mail_code_wrap">
                    <div className="mail_code_input_box">
                        <input className={styles.mail_code_input}/>
                    </div>
                    <div className="mail_code_button">
                        <input type="button" value="인증번호 전송"/>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="pw_wrap">
                    <div className="pw_name">비밀번호</div>
                    <div className="pw_input_box">
                        <input className={styles.pw_input} id="pw"/>
                    </div>
                </div>
                <div className="pwck_wrap">
                    <div className="pwck_name">비밀번호 확인</div>
                    <div className="pwck_input_box">
                        <input className={styles.pwck_input} id="pwck"/>
                    </div>
                </div>
                <div className="user_wrap">
                    <div className="user_name">이름</div>
                    <div className="user_input_box">
                        <input className={styles.user_input} id="userName"/>
                    </div>
                </div>
                <div className="nick_wrap">
                    <div className="nick_name">닉네임</div>
                    <div className="nick_input_box">
                        <input className={styles.nick_input} id="nickName"/>
                    </div>
                </div>
                <div className="tel_wrap">
                    <div className="tel_name">전화번호</div>
                    <div className="tel_input_box">
                        <input className={styles.tel_input} id="tel"/>
                    </div>
                <div className="error_result">
                </div>	
                    <span id="email_result"></span>
                    <span id="pw_result"></span>
                    <span id="pwck_result"></span>
                    <span id="name_result"></span>
                    <span id="nickName_result"></span>
                    <span id="tel_result"></span>
                </div>
                <div className="join_btn_wrap">
                    <input type="button" className={styles.join_btn} id="join_btn" value="가입하기"/>
                </div>
            </div>
	    </div>
    )
}
