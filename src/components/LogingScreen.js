/** 
 * @author: alexandercd
 * @description: 
 * @date 07/octubre/2021
**/
import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const LogingScreen = () => {
    const { setUser } = useContext(UserContext); 
    return (
        <div>
            <button 
                className="btn btn-primary"
                onClick={() => {
                    setUser({
                        id: 12345,
                        name: 'alexandercddev',
                        email: 'alexandercd@hotmail.com'
                    });
                }}
            >
                Login
            </button> 
        </div>
    )
}

export default LogingScreen;