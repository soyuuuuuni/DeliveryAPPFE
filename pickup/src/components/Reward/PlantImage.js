import React from 'react';
import styles from './RewardRoom.module.css'; // CSS 모듈 import

const getRandomImage = () => {
  const randomIndex = Math.floor(Math.random() * 9) + 1;
  return `level5-${randomIndex}.png`;
};

const PlantImage = ({ useRandomImage }) => {
  return (
    <div className={styles.finalPlantImage}>
      {/* useRandomImage 값에 따라 랜덤 이미지를 사용하거나 동일한 이미지를 사용 */}
      <img src={useRandomImage ? getRandomImage() : 'level5-7.png'} alt="plant" />
    </div>
  );
};

export default PlantImage;
