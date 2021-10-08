/** 
 * @author: alexandercd
 * @description: 
 * @date 07/octubre/2021
**/
import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const HomeScreen = () => {
    const { user, setUser } = useContext(UserContext);  
    return (
        <div>
            Home
            <code>
                <pre >
                    {JSON.stringify(user, null, 3)}
                </pre>
            </code> 
            <button 
                className="btn btn-warning"
                onClick={() => {
                    setUser({ });
                }}
            >
                Login
            </button> 
        </div>
    )
}

export default HomeScreen;