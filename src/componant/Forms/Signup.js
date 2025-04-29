
import { MdEmail } from "react-icons/md";
import { FaLock ,FaUser} from 'react-icons/fa'; 
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import './form.css'
import { useState } from "react";

const Signup =() =>{
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: Yup.object({
            username: Yup.string().required("Username is required"),
            email: Yup.string().email("Invalid email address").required("Email is required"),
            password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], "Passwords must match")
                .required("Confirm password is required"),
        }),
        onSubmit: (values) => {
            setLoading(true);
            const auth = getAuth();
            
            
            createUserWithEmailAndPassword(auth, values.email, values.password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    console.log("User created:", user);
                    setLoading(false);
                    navigate("/");  
                })
                .catch((error) => {
                    setLoading(false);
                    setErrorMessage(error.message); 
                });
        },
    });
    return(
        <div className="Sign-up2">
            <div className="sign-up">
             <div className="sign-up-title">
            <h1>Sign Up</h1>
            <p>Create your account</p>
             </div>
            <form  onSubmit={formik.handleSubmit}>
                <div className="user-up">
                    <FaUser  style={{ color: '#005E55', fontSize: '20px', marginRight: '10px' }}/>
                    <input type="text"
                            name="username"
                            placeholder="Username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}/>
                </div>
                {formik.touched.username && formik.errors.username && (
                        <div className="error-message">{formik.errors.username}</div>
                    )}


                <div className="email-up">
                    <MdEmail  style={{ color: '#005E55', fontSize: '20px', marginRight: '10px' }}/>
                    <input  type="email"
                            name="email"
                            placeholder="Email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    {formik.touched.email && formik.errors.email && (
                        <div className="error-message">{formik.errors.email}</div>
                    )}
                

                <div className="pass-up">
                    <FaLock  style={{ color: '#005E55', fontSize: '20px', marginRight: '10px' }}/>
                    <input      type="password"
                            name="password"
                            placeholder="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    {formik.touched.password && formik.errors.password && (
                        <div className="error-message">{formik.errors.password}</div>
                    )}


                
                <div className="confirm-pass">
                <FaLock style={{ color: '#005E55', fontSize: '20px', marginRight: '10px' }}/>
                <input type="password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                            value={formik.values.confirmPassword}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </div>
                    {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                        <div className="error-message">{formik.errors.confirmPassword}</div>
                    )}

                    {errorMessage && <div className="error-message">{errorMessage}</div>}

                    <button type="submit" className="btn-up" disabled={loading}>
                        {loading ? "Signing Up..." : "Sign Up"}
                    </button>
                

            </form>
            <div className="account-up">
                <span>Already have an account?</span>
                <Link to ="/Sign"  className="gosign-in">Sign In</Link>
                </div>
        </div>
        </div>

    )
}

export default Signup;