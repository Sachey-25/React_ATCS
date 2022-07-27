import React from 'react'
import { useDispatch } from "react-redux"
import { login,logout } from '../features/user';

function Login() {
    const dispatch=useDispatch();

  return (
    <div className="app">
        <button onClick={ ()=> {
            dispatch(login(
                {name:"Sachin", age:28, email:"sachin@email.com" }))}}>Login</button>
        <button onClick={ ()=> {
            dispatch(logout())}}>Login</button>
    </div>
  )}

export default Login