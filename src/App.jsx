import logo from './logo.svg';
import UserContextProvider from './context/UserContextProvider';
import { useState,useCallback, useEffect,useRef } from 'react';
import Login from './components/Login';
import Profile from './components/Profile';

function App() {
  return(
 
    <UserContextProvider>
      <Login/>
      <Profile/>
    </UserContextProvider>

  
  )
    
 
}

export default App;