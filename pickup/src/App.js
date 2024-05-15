import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//import PrivateRoute from "../src/util/PrivateRoute";
import LoginPage from './components/User/Login';
import Register from './components/User/signUp';
import RewardRoom from './components/Reward/RewardRoom';
import Profile from './components/User/Profile';
import Home from './components/Home/HomeScreen';
import './components/Reward/RewardRoom.module.css';
import './components/Home/Home.module.css';
import QRReader from './components/Reward/QRReader';
//import ProtectedPage from "./components/ProtectedPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/reward" element={<RewardRoom />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/profile" element = {<Profile/>}/>
        <Route path="/signup" element={<Register />} />
        <Route path="/qr" element={<QRReader />}/>
      </Routes>
   </Router>
  )
}
   /*<Router>
   <div className="flex flex-col min-h-screen overflow-hidden">
     <AuthProvider>
       <Routes>
         <Route path="/profile" element={<Profile />} />
         <Route path="/login" element={<LoginPage />} />
         <Route path="/signup" element={<SignupPage />} />
         <PrivateRoute path="/protected" element={<ProtectedPage />} />
         <Route path="/home" element={<Home />} />
         <Route path="/reward" element={<RewardRoom />} />
       </Routes>
     </AuthProvider>
   </div>
 </Router>
 
  );
}
*/
//<Route path="/signup" element={<SignupPage />} />

export default App;
