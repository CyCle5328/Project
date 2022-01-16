import React from 'react';
import styles from './login.module.css';

export const Login = () => {
  return (
    <div>
      <div className={styles.wrapper}>
        <div className="wrap">
          <header className={styles.loginHeader}>
            <h1>로그인</h1>
          </header>
          <section className={styles.input_wrapper}>
            <div className="login_wrap">
              <div className="id_wrap">
                <div className="id_input_box">
                  <input
                    className={styles.id_input}
                    id="email"
                    placeholder="이메일"
                  />
                </div>
              </div>
              <div className="pw_wrap">
                <div className="pw_input_box">
                  <input
                    className={styles.pw_iput}
                    id="pw"
                    placeholder="비밀번호"
                  />
                </div>
              </div>
              <div className="login_btn_wrap">
                <div className="error_result">
                  <span id="email_result"></span>
                  <br />
                </div>
                <input
                  type="button"
                  className={styles.login_btn}
                  id="login_btn"
                  value="로그인"
                />
              </div>
            </div>
          </section>

          <footer>
            <div className={styles.join}>
              <span>아직 회원이 아니시라면? </span>
              <a href="/project/member/joinPage">회원가입</a>
            </div>
            <a href="/project/member/findIdPage">아이디</a> /
            <a href="/project/member/findPwPage">비밀번호</a> 찾기
          </footer>
        </div>
      </div>
    </div>
  );
};
