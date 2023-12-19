import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./Home.module.css";
import TabBar from '../TabBar/TabBar';

const HomeScreen = () => {
  
  const handleStoreListClick = () => {
    // 이 함수에서는 페이지를 이동시키는 대신, 장고 템플릿이 렌더링된 URL로 이동하도록 설정할 수 있습니다.
    window.location.href = 'http://localhost:8000/restaurants/'; // 장고에서 렌더링된 템플릿의 URL로 대체해야 합니다.
  };

  return (
    <div className={styles.homescreen}>
      <div className={styles.logobutton}>
        <img
          className={styles.pickuplogo1Icon}
          alt=""
          src="/pickupLogo.png"
        />
      </div>
    
      <button className={styles.storelistbutton} onClick={handleStoreListClick}>
        <div className={styles.storelistbuttonChild} />
        <i className={styles.storeList}>Store List</i>
        <i className={styles.i}>{`먹고 싶은 음식, 가게를 찾아요 ! `}</i>
        <img className={styles.storelistIcon} alt="" src="/storelistimg.png" />
      </button>
      
      {/* 기존 버튼을 Link 컴포넌트로 변경 */}
      <div className={styles.homescreenChild} />
      <div className={styles.recommendbutton}>
        <div className={styles.parent}>
          <i className={styles.i1}>메뉴 추천</i>
          <i className={styles.i2}>메뉴 고르기 힘드시죠 ?</i>
        </div>
        <img
          className={styles.recommendButtonImg}
          alt=""
          src="/recommendBtnimg.png"
        />
      </div>
      <Link to="/reward" className={styles.rewardroombutton}>
        <div className={styles.roomParent}>
          <i className={styles.room}>리워드 room</i>
          <i className={styles.i3}>
            <p className={styles.p}>{`내 포인트와 식물을 `}</p>
            <p className={styles.p}>가꿔보세요</p>
          </i>
        </div>
        <img
          className={styles.rewardroomImg}
          alt=""
          src="/rewardroomImg.png"
        />
      </Link>
      <i className={styles.pickUp}>pick up !</i>

      <button className={styles.returnbutton}>
        <div className={styles.returnbuttonChild} />
        <img
          className={styles.returnimageIcon}
          alt=""
          src="/returnIcon.png"
        />
        <i className={styles.i4}>용기 반납하기</i>
      </button>

      <div className = {styles.tabBar}>
        <TabBar />
      </div>
       
    </div>
    
  );
};

export default HomeScreen;