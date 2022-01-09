import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import React from 'react'
import styles from './artList.module.css'
import Artwork from './artwork';

const ArtList = () => {
    const fnArtList = () => {
        
    }
    return (
        <div>
            <div class={styles.arrange_container}>
				<div className={styles.search_wrapper}>
					<input list="auto_complete" type="text" id="query" name="query" placeholder="작가명 . 작품명 검색"/>
					<datalist id="auto_complete"></datalist>
					<button id="search_btn"><FontAwesomeIcon icon={faSearch}/></button>
				</div>
				<div>
				    <ul id="themeType" className={styles.themeType} onchange={fnArtList()}>
                      <h3>테마</h3>
				      <li>
				        <input type="radio" name="theme" value="전체보기" id="all"/><label htmlFor="all">전체보기</label>
				      </li>
				      <li>
                        <input type="radio" name="theme" value="인물" id="person"/><label htmlFor="person">인물</label>
				      </li>
				      <li>
                        <input type="radio" name="theme" value="풍경" id="Scenery"/><label htmlFor="Scenery">풍경</label>
				      </li>
				      <li>
                        <input type="radio" name="theme" value="정물" id="still_life"/><label htmlFor="still_life">정물</label>
				      </li>
				      <li>
                        <input type="radio" name="theme" value="동물" id="animal"/><label htmlFor="animal">동물</label>
				      </li>
				      <li>
                        <input type="radio" name="theme" value="상상" id="imagination"/><label htmlFor="imagination">상상</label>
				      </li>
				      <li>
				        <input type="radio" name="theme" value="추상" id="abstract"/><label htmlFor="abstract">추상</label>
				      </li>
				    </ul>
				</div>
                <div className={styles.arrange_wrapper}>
                    <input type="checkbox" className={styles.artState} id="artStateArrage" value="rentalPossible" onClick={fnArtList()}/><label className="artStateLabel" htmlFor="artStateArrage">렌탈가능</label>
                    <select id="arrange" className={styles.arrange} onChange={fnArtList()}>
                        <option key="RECENT" value="RECENT" selected="selected">최신 목록</option>
                        <option key="LOWPRICE" value="LOWPRICE">낮은 가격</option>
                        <option key="HIGHPRICE" value="HIGHPRICE">높은 가격</option>
                    </select>
                </div>
			</div>
            <section>
                <Artwork/>
            </section>
            <footer>
                paging
            </footer>
        </div>
    )
}

export default ArtList
