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
    // localStorage.setItem("isLoggedIn", true)
    // localStorage.setItem("userToken", token)
    // localStorage.setItem("user", JSON.stringify(user))
  }
  const logout = () => {
    setIsLoggedIn(false)
    saveToken(null)
    saveUser({ lastname: "", firstname: "" })
    // localStorage.removeItem("isLoggedIn")
    // localStorage.removeItem("userToken")
    // localStorage.removeItem('user')
  }

  const userData = {
    // isLoggedIn: localStorage.getItem("isLoggedIn") ? localStorage.getItem("isLoggedIn") : isLoggedIn,
    // token: localStorage.getItem("userToken") ? localStorage.getItem("userToken") : token,
    // user: localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : user,
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