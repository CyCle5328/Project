import React, { useState } from 'react'
import styles from './rental.module.css'
import { RentalArtworks } from './rentalArtworks';

export const Rental = () => {
    const [loginUser, setLoginUser] = useState("관리자");
    return (
        <div className={styles.container}>
            <div className={styles.wrap}>
                <div>
                    <h3 className={styles.info}>주문자 정보</h3>
                    <label>주문자명</label> {loginUser} <br/>
                    <label htmlFor="tel">전화번호</label><input type="text" id="tel" readOnly="readOnly" placeholder="loginUser.tel"/><br/>
                    <label>이메일</label> {loginUser}  <br/>
                </div>
                
                <div>
                    <h3 className={styles.info}>수취인 정보</h3>
                    <label>수취인명</label><input type="text" id="recieverName" placeholder="수취인명"/><br/>
                    <label htmlFor="address">주소</label><input type="text" id="address" placeholder="주소"/>
                    <input type="button" className={styles.findAdderss} onClick="execDaumFindAddress()" value="주소 찾기"/><br/>
                    <label htmlFor="detailAdrress">상세주소</label><input type="text" className={styles.address} id="detailAddress" placeholder="상세주소"/>
                    <input type="text" className={styles.address} id="extraAddress" placeholder="참고항목"/><br/>
                    <label>핸드폰</label><input type="text" className={styles.tel} id="recieverTel1" maxLength="3"/> - <input type="text" className={styles.tel} id="recieverTel2" maxLength="4"/> - <input type="text" className={styles.tel} id="recieverTel3" maxLength="4"/><br/>
                    <div className={styles.message_wrap}>
                        <label className={styles.message}>메시지</label><textarea rows="3" cols="48" id="requirement"></textarea><br/>
                    </div>
                </div>
                
                <section id="artworks">
                    <h3 className={styles.info}>주문 작품 정보 <span id="header_totalCount"></span></h3>
                    <div id="artworkInfo"></div>
                    <div id="totalCount"></div>
                    <div id="totalPrice"></div>
                    <br/><br/>
                </section>
                
                <div>
                    <label htmlFor="from" className={styles.date}>작품 렌탈일</label>
                    <input type="text" className={styles.inputdate} id="from" name="from" readOnly="readOnly"/>
                    <label htmlFor="to" className={styles.date}>작품 반납일</label>
                    <input type="text" className={styles.inputdate} id="to" name="to" readOnly="readOnly"/>
                </div>
            
                <div>
                    <input type="button" className={styles.rentalBtn} value="렌탈하기"/>                    
                </div>

                <br/><br/>
                <div id="Rental"></div>
            </div>
            <RentalArtworks/>          
        </div>
    )
}
