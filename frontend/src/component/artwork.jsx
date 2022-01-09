import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import styles from './artwork.module.css'

const Artwork = () => {
    return (
        <div>
            <div className={styles.art_wrapper}>
                <ul>
                    <span className={styles.imgs}>작품 이미지</span>
                    <li>작품 명</li>
                    <li>저자 명</li>
                    <li><FontAwesomeIcon className={styles.circle} icon={faCircle}/>상태</li>
                </ul>
            </div>
        </div>
    )
}

export default Artwork
