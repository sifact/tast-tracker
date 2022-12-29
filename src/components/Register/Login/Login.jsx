import React, { useContext, useState } from "react";
import "./Login.scss";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
    const { signIn, googleProviderLogin } = useContext(AuthContext);
    const [loginError, setLoginError] = useState("");

    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();

    const googleProvider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        googleProviderLogin(googleProvider)
            .then((result) => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch((e) => console.log(e.message));
    };

    const onSubmit = (data) => {
        setLoginError("");
        signIn(data.email, data.password)
            .then((res) => {
                const user = res.user;
                navigate(from, { replace: true });
            })
            .catch((e) => {
                console.log(e.message);
                setLoginError(e.message);
            });
    };

    return (
        <section className="register">
            <div className="form-wrapper-input">
                <h2 className="section-title center">Login</h2>
                <p style={{ color: "red" }}>{loginError}</p>
                <form
                    className="register-form"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <input
                        className="register-input"
                        type="email"
                        {...register("email", { required: true })}
                        placeholder="Email"
                        name="email"
                    />
                    {errors.email && (
                        <span style={{ color: "red" }}>Email is required</span>
                    )}
                    <br />
                    <input
                        className="register-input"
                        type="password"
                        placeholder="password"
                        name="password"
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message:
                                    "Password must be 6 character or longer",
                            },
                        })}
                    />
                    {errors.password && (
                        <span style={{ color: "red" }}>
                            {errors.password?.message}
                        </span>
                    )}
                    <br />
                    <button className="btn btn-login">Login</button>
                    {/* <hr className="solid" /> */}
                    {/* <span className="hr-text">Or</span> */}
                </form>
                <div className="google-icon">
                    <button
                        onClick={handleGoogleSignIn}
                        className="btn btn-login"
                    >
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
