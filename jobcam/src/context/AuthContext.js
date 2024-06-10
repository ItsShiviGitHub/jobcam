import React, { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
    const [IsLogged, setIsLogged] = useState(false);
    const [UserInfo, setUserInfo] = useState(null);
    const Navigate = useNavigate();

    useEffect(() => {
        const data = localStorage.getItem('UserInfo');
        const userData = JSON.parse(data);
        if (userData) {
            setIsLogged(true);
            setUserInfo(userData);
        } else {
            setIsLogged(false);
            setUserInfo(null);
        }
    }, [IsLogged]);

    function userLogin(Email, Password, Role) {
        // Implement secure authentication mechanism and store tokens securely.
        // For simplicity, I'll just store email for demonstration purposes.
        const data = {
            Email: Email,
            Password: Password,
            Role: Role
        };
        localStorage.setItem('UserInfo', JSON.stringify(data));
        setIsLogged(true);
        Navigate('/'); // Navigate outside the effect
    }

    function userLogout() {
        localStorage.removeItem('UserInfo');
        setIsLogged(false);
        setUserInfo(null);
        Navigate('/login'); // Navigate outside the effect
    }

    return (
        <AuthContext.Provider value={{ UserInfo, userLogout, userLogin, IsLogged }}>
            {children}
        </AuthContext.Provider>
    );
}
