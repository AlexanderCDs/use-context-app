/** 
 * @author: alexandercd
 * @description: 
 * @date 07/octubre/2021
**/
import React, { useState } from 'react'
import AppRouter from './AppRouter.';
import { UserContext } from './UserContext';

export const MainApp = () => {
    const [user, setUser] = useState({
        id: 12345,
        name: 'alexandercddev',
        email: 'alexandercd@hotmail.com'
    });
    return ( 
        <UserContext.Provider value={user}>
             <AppRouter />
        </UserContext.Provider> 
    )
}

export default MainApp;