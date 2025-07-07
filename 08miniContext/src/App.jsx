import React from "react";  
import Login from './component/Login.jsx'
import Profile from './component/Profile.jsx'
import UserContextProvider from './context/UserContextProvider'

function App() {
  return (
    <UserContextProvider>
      <h1>React Context Api</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App