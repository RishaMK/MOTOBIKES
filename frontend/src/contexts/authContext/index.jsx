import React, { useEffect, useState, useContext } from "react";
import { auth } from '../../firebase/firebase';
import { onAuthStateChanged } from "firebase/auth";

const AuthContext = React.createContext();

export function useAuth() {
    return useContext(AuthContext);
}

export function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState(null);
    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, initializeUser);
        return unsubscribe;
    }, []);

    async function initializeUser(user) {
        if (user) {
            const tokenResult = await user.getIdTokenResult();
            const isAdmin = tokenResult.claims.admin || false;

            setCurrentUser({ ...user });
            setUserLoggedIn(true);
            setIsAdmin(isAdmin);
        } else {
            setCurrentUser(null);
            setUserLoggedIn(false);
            setIsAdmin(false);
        }
        setLoading(false);
    }

    const value = {
        currentUser,
        userLoggedIn,
        isAdmin,
        loading,
    };

    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    );
}
