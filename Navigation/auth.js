//useContexthook
import React from 'react'
import { useContext } from 'react';
import { useState } from "react";
import { createContext } from "react";

const AuthContext=createContext(null);

export const AuthProvider=({children})=>{
    const [user, setUser] =  useState(null);

    const login = users => {
        setUser(user)
    }
    const logout = users =>{
        setUser(null)
    }
    return(
        <AuthContext.Provider value= { 
            { user, login, logout }}>  {children} </AuthContext.Provider>
    )
}

const useAuth=()=>{
    return(
        useContext(AuthContext)
    )
}
export default useAuth



