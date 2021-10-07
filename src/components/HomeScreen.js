/** 
 * @author: alexandercd
 * @description: 
 * @date 07/octubre/2021
**/
import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const HomeScreen = () => {
    const userContext = useContext(UserContext);
    console.info(userContext)
    return (
        <div>
            home
        </div>
    )
}

export default HomeScreen;