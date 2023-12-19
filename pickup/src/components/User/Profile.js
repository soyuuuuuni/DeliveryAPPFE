import React from 'react';
import styles from "./Profile.module.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import TabBar from '../TabBar/TabBar';

const Profile = ({ history }) => {
  const handleLogout = () => {
    // Assuming you are using localStorage to store the token
    localStorage.removeItem('token');
    // Redirect to the login page or any other desired page after logout
    history.push('/login');
  };

  return (
    <div className={styles.div}>
      <Link to="/login" className={styles.loginbutton}>
        <i className={styles.i}>로그인하기</i>
        <FontAwesomeIcon
          icon={faUser}
          className={styles.loginIcon}
          style={{ width: '20px', color: 'grey' }}
        />
      </Link>

      <button className={styles.setaddress}>
        <div className={styles.setaddressChild} />
        <i className={styles.i1}>주소 설정하기</i>
      </button>

      {/* Logout Button */}
      <button className={styles.logoutbutton} onClick={handleLogout}>
        <FontAwesomeIcon icon={faArrowRightFromBracket} className={styles.logoutIcon}/>
        <i className={styles.i2}>로그아웃</i>
      </button>

      <div className={styles.tabBar}>
        <TabBar />
      </div>
    </div>
  );
};

export default Profile;
