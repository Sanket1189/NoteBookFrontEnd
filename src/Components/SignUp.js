import React, { useContext, useState } from 'react'
import './SignUp.css'
import { useNavigate } from 'react-router-dom';
import ApiContext from '../Context/ApiContext';
import SignUpContext from '../Context/SignUpContext';






export default function SignUp() {

    const [data, setData] = useState({ email: "", password: "", conPassword: "", userName: "" });

    const navigate = useNavigate();
    const firstPage = () => {
        navigate('/');
    }

    const signUpContext = useContext(SignUpContext);
    const onHandleChange = (e) => {

        setData({ ...data, [e.target.name]: e.target.value })
    }
    const apiContext = useContext(ApiContext);



    return (
        <>

            <div className="container su-outer">
                <i className="fa-solid fa-backward fa-2xl su-back-arrow" onClick={firstPage}></i>
                <h1 className="su-header">Sign Up</h1>
                <form className="su-form" onSubmit={(e) => { apiContext.addUserApi(e, data) }}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputUserName" className="form-label">User Name</label>
                        <input type="text" name="userName" value={data.userName} onChange={onHandleChange} className="form-control" id="exampleIexampleInputUserNamenputEmail1" required />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" name="email" value={data.email} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required onChange={onHandleChange} />
                        <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <div className="show-password">

                            <input type={signUpContext.showPass ? 'text' : 'password'} name="password" value={data.password} className="form-control" id="exampleInputPassword1" minLength={8} required autoComplete='off' onChange={onHandleChange} />
                            <div className="su-pass-icon" onMouseDown={signUpContext.handleMouseDown}
                                onMouseUp={signUpContext.handleMouseUp} >
                                {signUpContext.showPass === true ? <i className="fa-solid fa-eye"></i> : <i className="fa-solid fa-eye-slash"></i>}

                            </div>
                        </div>

                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword2" className="form-label">Confirm Password</label>
                        <input type="password" name="conPassword" value={data.conPassword} className="form-control" id="exampleInputPassword2" minLength={8} required autoComplete='off' onChange={onHandleChange} />
                    </div>

                    <button type="submit" className="btn btn-primary" >Sign Up</button>
                </form>
            </div>
        </>
    )
}
