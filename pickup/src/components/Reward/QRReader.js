import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import QrScanner from 'qr-scanner';
import TabBar from '../TabBar/TabBar';
import styles from '../TabBar/tabBar.module.css';

const CameraContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const CameraView = styled.video`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ScanResult = styled.div`
  position: absolute;
  bottom: 10px;
  left: 10px;
  background-color: white;
  padding: 10px;
  border-radius: 5px;
`;

const QrOptions = {
  preferredCamera: 'environment',
  maxScansPerSecond: 5,
  highlightScanRegion: true,
};

const QRRead = () => {
  const [myRun, setMyRun] = useState({
    userId: null,
    storeId: null,
    orderId: null,
  });
  const videoRef = useRef(null);

  useEffect(() => {
    const videoElem = videoRef.current;
    if (videoElem) {
      const qrScanner = new QrScanner(videoElem, (result) => handleScan(result), QrOptions);
      qrScanner.start();

      return () => qrScanner.destroy();
    }
  }, []);

  const handleScan = (result) => {
    const parsedData = JSON.parse(result.data);
    setMyRun({
      userId: parsedData.userId,
      storeId: parsedData.storeId,
      orderId: parsedData.orderId,
    });
  };

  return (
    <CameraContainer>
      <CameraView ref={videoRef} />
      <ScanResult>
        <p>User ID: {myRun.userId}</p>
        <p>Store ID: {myRun.storeId}</p>
        <p>Order ID: {myRun.orderId}</p>
      </ScanResult>

      <div className = {styles.tabBar}>
        <TabBar />
      </div>
    </CameraContainer>
  );
};

export default QRRead;