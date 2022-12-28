import React from "react";
import "./Login.scss";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
    return (
        <section className="register">
            <div className="form-wrapper-input">
                <h2 className="section-title center">Login</h2>
                <form className="register-form">
                    <input
                        className="register-input"
                        type="email"
                        placeholder="Email"
                        name="email"
                    />
                    <br />
                    <input
                        className="register-input"
                        type="password"
                        placeholder="password"
                        name="password"
                    />
                    <br />
                    <button className="btn btn-login">Login</button>
                    {/* <hr className="solid" /> */}
                    {/* <span className="hr-text">Or</span> */}
                </form>
                <div className="google-icon">
                    <button className="btn btn-login">
                        <FaGoogle />
                    </button>
                </div>
                <p className="signup-link">
                    Not Sign up yet? <Link to="/register">Register Now</Link>
                </p>
            </div>
        </section>
    );
};

export default Login;
