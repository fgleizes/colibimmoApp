import React, { useState } from 'react';

export const UserContext = React.createContext({
  isLoggedIn: false,
  token: "",
  user: {},
  setIsLoggedIn: () => { },
  setToken: () => { },
  setUser: () => { },
  login: () => { },
  logout: () => { }
});

export const UserContextProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [token, setToken] = useState(null)
  const [user, setUser] = useState({ lastname: "", firstname: "" })
  const saveToken = (token) => {
    setToken(token)
  }
  const saveUser = (user) => {
    user.firstname = user.firstname.charAt(0).toUpperCase() + user.firstname.substring(1).toLowerCase()
    user.lastname = user.lastname.charAt(0).toUpperCase() + user.lastname.substring(1).toLowerCase()
    setUser(user)
  }
  const saveIsLoggedIn = (isLoggedIn) => {
    setIsLoggedIn(isLoggedIn)
  }
  const login = (token, user) => {
    setIsLoggedIn(true)
    saveToken(token)
    saveUser(user)
  }
  const logout = () => {
    setIsLoggedIn(false)
    saveToken(null)
    saveUser({ lastname: "", firstname: "" })
  }
  const userData = {
    isLoggedIn: isLoggedIn,
    token: token,
    user: user,
    setIsLoggedIn: saveIsLoggedIn,
    setToken: saveToken,
    setUser: saveUser,
    login: login,
    logout: logout
  }
  return (
    <UserContext.Provider value={userData}>
      {children}
    </UserContext.Provider>
  )
}