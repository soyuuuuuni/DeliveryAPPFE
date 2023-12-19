import axios from 'axios';
import React, { useState } from 'react';
import styles from "./Login.module.css";
import { Link } from 'react-router-dom';
import { setAuthHeader } from './apiService'; // apiService.js 파일의 경로에 맞게 수정

const Login = ({ history }) => {
  // 상태 변수 선언
  const [email, setUsername] = useState('');
  const [password, setPassword] = useState('');
  console.log('페이지 실행됨');
  // 로그인 버튼 클릭 시 실행되는 함수
  const handleLogin = async () => {
    console.log('로그인 요척함');
    try {
      // axios를 사용하여 로그인 요청
      const response = await axios.post(
        '/login/',
        { email, password },
        {
          headers: {
            'Content-Type': 'application/json', 
          },
        }

      );
      console.log('여기까지 올수있나?');
      if (response.status === 200) {
        const { token, email, ceo } = response.data;
        console.log('200까지는 됐음');
        // 토큰을 로컬 스토리지에 저장
        localStorage.setItem('token', token);

        // axios의 기본 헤더에 Authorization을 설정하여 토큰을 전역적으로 사용
        setAuthHeader(token);

        console.log('Token:', token);
        console.log('User ID:', email);
        console.log('CEO:', ceo);
        console.log('Received Token:', localStorage.getItem('token'));

        history.push('/home');
        // 여기서 토큰을 상태로 관리하거나 다른 처리를 수행할 수 있습니다.
      } else {
        console.error('Login failed:', response.data.error);
      }
    } catch (error) {
      console.error('Login failed:', error.message);
    }
  };

  // JSX로 화면 표시
  return (
    <div style={{
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      width: '100%', height: '100vh'
    }}>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {/* Pickup 로고 표시 */}
        <img src="/pickupLogo.png" alt="Pickup Logo" style={{ marginBottom: '10px' }} />
        
        {/* 이메일 입력 필드 */}
        <label htmlFor="email">e-mail</label>
        <input type="text" id="email" value={email} onChange={(e) => setUsername(e.target.value)} />

        <label htmlFor="password">비밀번호</label>
        <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} />

        <br />

        {/* 로그인 버튼 */}
        <button className={styles.enterbutton} onClick={handleLogin}>Login</button>
        
        {/* 회원가입 버튼 */}
        <Link to="/signUp" className={styles.signinbutton}>
          <button>sign in</button>
        </Link>
      </div>
    </div>
  );
};

export default Login;
