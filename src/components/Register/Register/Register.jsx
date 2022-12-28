import React from "react";
import "./Register.scss";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Register = () => {
    return (
        <section className="register">
            <div className="form-wrapper-input-register">
                <h2 className="section-title center">Register Now</h2>
                <form className="register-form">
                    <input
                        className="register-input"
                        type="text"
                        placeholder="name"
                        name="name"
                    />
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
                    already sign up? <Link to="/login">Log in</Link>
                </p>
            </div>
        </section>
    );
};

export default Register;
