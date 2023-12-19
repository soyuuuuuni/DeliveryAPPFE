// 필요한 React 및 Axios import 추가
import React, { useState } from 'react';
import styles from './signUpPage.module.css';
import { apiService, setAuthHeader } from './apiService';  

const Register = () => {
  // 회원가입에 필요한 상태 설정
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [isRestaurantAdmin, setIsRestaurantAdmin] = useState(false);

  // 회원가입 핸들러
  const handleRegister = async () => {
    try {
      const response = await apiService.post('/register/', {
        username,
        email,
        password,
        password2,
        isRestaurantAdmin: isRestaurantAdmin,
      }
);
      const token = response.data.token;
      
      console.log('Token:', token);

      console.log('response:',response)
      console.log('Token:', response.data.token);
      console.log('User ID:', response.data.email);
      console.log('Is Restaurant Admin:', response.data.is_restaurant_admin);

      // Set the token in localStorage
      localStorage.setItem('token', response.data.token);

      // Set the authentication header
      setAuthHeader(response.data.token);

      // Additional logic or redirection can be added here
    } catch (error) {
      console.error('Registration Error:', error.response.data);
    }
  };

  return (
    <div className = {styles.container}>
      <div className = {styles.pickupLogoParent}>
        <img
          className = {styles.pickupLogoChild}
          alt = ""
          src = "./pickupLogo.png"
        />
      </div>
      
  
      <div>
        <label>Username:</label>
        <br/>
        <input type="text" onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <br/>
        <input type="email" onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <br/>
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
      </div>
      <div>
        <label>Confirm Password:</label>
        <br/>
        <input type="password" onChange={(e) => setPassword2(e.target.value)} />
      </div>
      <div>
        <label>Is Restaurant Admin:</label>
        <input type="checkbox" onChange={() => setIsRestaurantAdmin(!isRestaurantAdmin)} />
      </div>
      <br/>
      <br/>
      <button className = {styles.enterbutton} onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
