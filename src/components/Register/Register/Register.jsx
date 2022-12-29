import React, { useContext, useState } from "react";
import "./Register.scss";
import { FaGoogle } from "react-icons/fa";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../contexts/AuthProvider";

const Register = () => {
    const { createUser, updateUser } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState("");

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = (data) => {
        setSignUpError("");
        createUser(data.email, data.password)
            .then((result) => {
                const user = result.user;
                console.log(user);
                toast.success("User Created Successfully", {
                    // icon: "👏",
                    style: {
                        borderRadius: "10px",
                        background: "#333",
                        color: "#fff",
                    },
                });

                const userInfo = {
                    displayName: data.name,
                };

                updateUser(userInfo)
                    .then(() => {})
                    .catch((err) => console.log(err));
                navigate("/");
            })
            .catch((e) => {
                console.log(e.message);
                setSignUpError(e.message);
            });
    };

    return (
        <section className="register">
            <div className="form-wrapper-input-register">
                <h2 className="section-title center">Register Now</h2>
                {signUpError && <p className="text-red-400">{signUpError}</p>}
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="register-form"
                >
                    <input
                        {...register("name")}
                        className="register-input"
                        type="text"
                        placeholder="name"
                        name="name"
                    />
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
                        {...register("password", {
                            required: "Password is required",
                            minLength: {
                                value: 6,
                                message:
                                    "Password must be 6 character or longer",
                            },
                        })}
                        className="register-input"
                        type="password"
                        placeholder="password"
                        name="password"
                    />
                    {errors.email && (
                        <span style={{ color: "red" }}>Email is required</span>
                    )}
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
