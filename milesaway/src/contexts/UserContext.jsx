import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const UserContext = createContext(null);

export const useUser = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
    const storedUser = localStorage.getItem('user');
    const [user, setUser] = useState(storedUser ? JSON.parse(storedUser) : null);

    const login = (userData) => {
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData))
    };

    const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
    };

    const refresh = async () => {
        const userData = await axios.get(`http://localhost:4001/accounts/${user.email}/${user.password}`);
        if(userData.data) {
            login(userData.data);
        }
    }

    //const useUserFetch = () => {
    //    const [loading, setLoading] = useState(true);
    //    const { login } = useContext(UserContext);

    //    useEffect(() => {
    //        const fetchUserData = async () => {
    //            try {
    //                const response = await axios.get(`http://localhost:4001/accounts/${user.email}/${user.password}`);
    //                if(response.data) {
    //                    login(response.data);
    //                }
    //            } catch (error) {
    //                console.error('Error fetching user data:', error.message);
    //            } finally {
    //                setLoading(false);
    //            }
    //        };

    //        fetchUserData();
    //    }, [login]);

    //    return { loading };
    //};

    const contextValue = {
        user,
        login,
        logout,
        refresh,
    };

    return (
        <UserContext.Provider value={contextValue}>
        {children}
        </UserContext.Provider>
    );
};

