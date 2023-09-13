
import React, { useContext, useState } from 'react'
import './Login.css'

import { useNavigate } from 'react-router-dom';
import SignUpContext from '../Context/SignUpContext';
import ApiContext from '../Context/ApiContext';


export default function Login() {
    const [data, setData] = useState({ email: "", password: "" });

    const apiContext = useContext(ApiContext);
    const signUpContext = useContext(SignUpContext)
    const navigate = useNavigate();
    const firstPage = () => {
        navigate('/');
    }
    const onHandleChange = (e) => {
        setData({ ...data, [e.target.name]: e.target.value })
    }

    return (
        <>

            <div className="container lp-outer">
                <i className="fa-solid fa-backward fa-2xl lp-back-arrow" onClick={firstPage}></i>
                <h1 className="lp-header">Log in</h1>
                <form className="lp-form" onSubmit={(e) => { apiContext.getUser(e, data) }}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name="email" value={data.email} onChange={onHandleChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <div className="show-password">

                            <input type={signUpContext.showPass ? "text" : "password"} name="password" value={data.password} onChange={onHandleChange} className="form-control" id="exampleInputPassword1" autoComplete='off' />
                            <div className="lp-pass-icon" onMouseDown={signUpContext.handleMouseDown}
                                onMouseUp={signUpContext.handleMouseUp}>
                                {signUpContext.showPass === true ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}

                            </div>

                        </div>

                    </div>


                    <button type="submit" className="btn btn-primary">Log in</button>
                </form>
            </div>
        </>
    )
}
