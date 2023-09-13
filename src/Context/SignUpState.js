import React, { useState } from 'react'
import SignUpContext from './SignUpContext'

export default function SignUpState(props) {
    const [showPass, setShowPass] = useState(false);
    const handleMouseDown = () => {
        setShowPass(true);

    };

    const handleMouseUp = () => {
        setShowPass(false);
    };

    return (
        <SignUpContext.Provider value={{ showPass, handleMouseDown, handleMouseUp }}>
            {props.children}
        </SignUpContext.Provider>
    )
}


