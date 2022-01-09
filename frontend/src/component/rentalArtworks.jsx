import React from 'react'
import styles from './rentalArtworks.module.css'

export const RentalArtworks = () => {
    return (
        <div className={styles.artinfo_wrap}>
            <header className={styles.infoHeader}> 
                <h3>주문 작품 정보 / ? 점</h3>
            </header>
            <section className={styles.artwork_wrap}>
                <div className={styles.artwork}>
                    <span className={styles.img}>작품 이미지</span>
                    <ul className={styles.artinfo}>
                        <li>작품 번호</li>
                        <li>작품 이름</li>
                        <li>작가 이름</li>
                        <li>가격 : </li>
                    </ul>
                </div>
                <div className={styles.artworks_info}>
                    <ul>
                        <li>작품 수 : </li>
                        <li>총 렌탈 가격 : </li>
                    </ul>
                </div>
            </section>
        </div>
    )
}
