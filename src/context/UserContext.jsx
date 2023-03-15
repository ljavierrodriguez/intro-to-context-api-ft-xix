import React, { createContext, useState } from 'react'

export const GlobalUserContext = createContext(null);

const UserContext = ({ children }) => {

    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john.doe@gmail.com',
        isAuth: true
    })

    const login = () => {
        setUser({
            name: 'John Doe',
            email: 'john.doe@gmail.com',
            isAuth: true
        })
    }

    const logout = () => {
        setUser({
            name: '',
            email: '',
            isAuth: false
        })
    }

    return (
        <GlobalUserContext.Provider value={{ user, login, logout }}>
            {children}
        </GlobalUserContext.Provider>
    )
}

export default UserContext