// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Homes';
import Profile from './Pages/Profile';
import Offers from './Pages/Offers'
import SignIn from './Pages/SignIn'
import SignOut from './Pages/SignOut'
import ForgotPassword from './Pages/ForgetPassword';
import NavBar from './components/NavBar/NavBar';


const App = () => {


  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="offers" element={<Offers />} />
        <Route path="sign-in" element={<SignIn />} />
        <Route path="sign-out" element={<SignOut />} />
        <Route path="forgot-password" element={<ForgotPassword />} />
      </Routes>

    </div>
  )
}

export default App;
