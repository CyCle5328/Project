import React from 'react'
import styles from './findPw.module.css'

export const FindPw = () => {
    return (
        <div className={styles.findPw}>
            <header className={styles.findPw_Header}>
                <h1>비밀번호 찾기 화면</h1>
            </header>

            <div className={styles.findPwInput_wrap}>
                <form id="f" method="post">
                    <span>
                        가입 당시 이메일
                    </span>
                    <div className={styles.input_wrap}>
                        <div>
                            <input type="text" className={styles.findPwinput} name="email" id="email" placeholder="이메일"/>
                            <input type="button" className={styles.findPwBtn} value="임시비밀번호 발급" id="authCode_btn"/>
                        </div>
                        <div>
                            <input type="text"  className={styles.findPwinput} name="pw" id="pw" placeholder="임시 비밀번호" />
                            <input type="button" className={styles.findPwBtn} value="임시비밀번호로 로그인" id="login_btn"/>                   
                        </div>
                    </div>
                </form>
            </div>
            <div>
                <a href="/project/member/loginPage">로그인하러가기</a>
            </div>
        </div>
    )
}
