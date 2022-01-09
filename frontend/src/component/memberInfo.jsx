import React from 'react'
import styles from './memberInfo.module.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faStar} from "@fortawesome/free-solid-svg-icons"

export const MemberInfo = () => {
    return (
        <div>
            <div className={styles.memberInfo}>
                <div className={styles.content}>
                    <header>
                        <h1>회원 정보</h1>
                        <h5>고객님과 관련된 정보입니다.</h5>
                    </header>
                    <section>
                        <div className={styles.wrap}>
                            <div className={styles.column}><FontAwesomeIcon className={styles.star} icon={faStar}/>이메일</div>
                            loginUser.email
                            <div>
                                <input type="hidden" id="email" value="${loginUser.email}"/>
                                <input type="hidden" id="userNo" value="${loginUser.userNo}"/>
                            </div>
                        </div>	
                        <div className={styles.wrap}>
                            <div className={styles.column}><FontAwesomeIcon className={styles.star} icon={faStar}/>비밀번호</div>
                            <div>
                                <input type="text" id="now_pw" placeholder="기존 비밀번호"/><br/>
                                <input type="text" id="new_pw" placeholder="새 비밀번호"/><br/>
                                <input type="text" id="new_pwck" placeholder="새 비밀번호 확인"/>
                                <input type="button" id="changePw_btn" className={styles.changeBtn}  value="변경"/>
                            </div>
                        </div>
                        <div className={styles.wrap}>
                            <span className={styles.column}><FontAwesomeIcon className={styles.star} icon={faStar}/>이름</span>
                            <div>
                                loginUser.userName
                            </div>
                        </div>
                        <div className={styles.wrap}>
                            <div className={styles.column}><FontAwesomeIcon className={styles.star} icon={faStar}/>휴대폰</div>
                            <div>
                                loginUser.tel<br/>
                                <input type="text" id="new_tel" placeholder="새 전화번호"/>
                                <input type="button" id="changeTel_btn" className={styles.changeBtn} value="변경"/>
                            </div>
                        </div>
                        <div className={styles.wrap}>
                            <div className={styles.column}><FontAwesomeIcon className={styles.star} icon={faStar}/>성별</div>
                            <div>loginUser.gender</div>
                        </div>
                    </section>
                    <div className={styles.delete_wrap}>
                        <input type="button" value="탈퇴" id="delete_member_btn" className={styles.deleteBtn}/>                
                    </div>
                    <div className={styles.save_wrap}>
                        <input type="button" className={styles.saveBtn} value="저장"/>
                    </div>
                </div>
            </div>
        </div>
    )
}
