import React, { useState } from 'react';
import styles from './RewardRoom.module.css'; // CSS 모듈 import
import PlantImage from './PlantImage'; // 수정된 PlantImage 컴포넌트 import
import TabBar from '../TabBar/TabBar';

const RewardRoom = () => {
  const [points, setPoints] = useState(0);
  const [plantLevel, setPlantLevel] = useState(1);
  const [echoLevel, setEchoLevel] = useState(1); // echoLevel 상태 추가
  const [plantNum, setPlantNum] = useState(0);

  const handlePointIncrease = () => {
    setPoints((prevPoints) => prevPoints + 1000);
  
    // 식물 성장 로직 추가
    if (points % 2000 === 1000) {
      setPlantLevel((prevPlantLevel) => (prevPlantLevel === 5 ? 1 : prevPlantLevel + 1));
      setEchoLevel((prevEchoLevel) => prevEchoLevel + 1);
      setPlantNum((prevPlantNum) => (plantLevel === 5 ? prevPlantNum + 1 : prevPlantNum));
    }
  };
  

  // getLevelText 함수 위치 수정
  const getLevelText = () => {
    if (echoLevel <= 10) {
      return 'Bronze';
    } else if (echoLevel <= 20) {
      return 'Silver';
    } else if (echoLevel <= 30) {
      return 'Gold';
    } else {
      return 'Diamond';
    }
  };

  return (
    <div className={styles.appContainer}>
      <div className={styles.header}>
        <img className={styles.pickupLogo} alt="" src="/pickupLogo.png" style={{ width: '100px', height: 'auto' }} />
        <div className={styles.rewardRoom}>Reward Room</div>
      </div>
      <div className={styles.div}>회원님의 현재 포인트는</div>
      <div className={styles.points}>{points}P</div>
      <div className={styles.div}>Echo 레벨 / 화분 개수</div>
      <div className={styles.points}>{getLevelText()}/{plantNum}</div>

      <div className={styles.background}>
        <img
          src={`/RewardRoomFrame.png`}
          alt="background"
          className={styles.backgroundImage}
        />

        <div className={styles.plantContainer}>
          {plantLevel === 5 ? (
            <PlantImage />
          ) :(<img src={`/level${plantLevel}.png`} alt="plant" className={styles.plantImage} />
          )}
        </div>
      </div>
      <button onClick={handlePointIncrease} className={styles.button} style={{ top: '80%' }}>
        물 주기
      </button>
      <TabBar />
    </div>
  );
};

export default RewardRoom;
 