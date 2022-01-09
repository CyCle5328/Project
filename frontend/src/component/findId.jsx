import React from 'react'
import styles from './findId.module.css'

export const FindId = () => {
    return (
        <div className={styles.findId}>
            <header className={styles.findIdHeader}>
                <h1>아이디 찾기 화면</h1>
            </header>
            <section className={styles.findIdInput_wrap}>
                <span>가입 당시 전화번호</span>
                <input className={styles.findByTel} type="text" name="tel" id="tel" placeholder="전화번호"/>
                <input type="button" className={styles.findIdBtn} value="아이디 찾기" id="search_btn"/><br/><br/>
            </section>
            <div>
                <a href="/project/member/loginPage">로그인하러가기</a>
            </div>
            
            <div id="search_result"></div>
        </div>
    )
}
