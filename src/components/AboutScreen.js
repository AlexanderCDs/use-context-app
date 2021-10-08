/** 
 * @author: alexandercd
 * @description: 
 * @date 07/octubre/2021
**/
import React, { useContext } from 'react'
import { UserContext } from './UserContext';

export const AboutScreen = () => {
    const { user } = useContext(UserContext);  
    return (
        <div>
            About
            <code>
                <pre >
                    {JSON.stringify(user, null, 3)}
                </pre>
            </code> 
        </div>
    );
}

export default AboutScreen;