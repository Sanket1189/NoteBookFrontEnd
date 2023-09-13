import React from 'react'
import { Link } from 'react-router-dom'
import './FirstPage.css';

export default function FirstPage() {
    return (
        <>
            <div className="fp-outer">
                <div className="card fp-card" style={{ width: "18rem" }}>
                    <div className="fp-inner1">

                        <img src="https://upload.wikimedia.org/wikipedia/commons/3/33/Vanamo_Logo.png" className="card-img-top fp-logo" alt="Logo" />
                        <div className="card-body">

                            <h5 className="card-title fp-header">FUSSION</h5>
                            <p className="card-text fp-des">"Sometimes you will never know the value of a moment, until it becomes a memory."</p>
                        </div>

                    </div>
                    <div className="fp-inner2">

                        <button type="button" className="btn btn-primary fp-button"><Link to="/login" className="btn btn-primary">LOGIN</Link></button>
                        <button type="button" className="btn btn-primary fp-button"><Link to="/signup" className="btn btn-primary">SIGNUP</Link></button>
                    </div>

                </div>
            </div>
        </>
    )
}
