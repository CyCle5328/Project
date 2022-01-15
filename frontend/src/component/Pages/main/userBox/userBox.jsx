import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './userBox.module.css';

const UserBox = ({ onLongin }) => {
  const [loginUser, setLoginUser] = useState(false);
  return (
    <div id={styles.userBox}>
      {loginUser && (
        <div id={styles.userBox_loggedIn}>
          <div id={styles.userBox_settingBtn}>
            <span id={styles.userBox_name}></span>
          </div>
        </div>
      )}
      {!loginUser && (
        <div id={styles.userBox_loggOut}>
          <div id={styles.userBox_loginBtn}>
            <Link to="/login" className={styles.link}>
              로그인
            </Link>
          </div>
          <div id={styles.userBox_joinBtn}>
            <Link to="/join" className={styles.link}>
              회원가입
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default UserBox;
