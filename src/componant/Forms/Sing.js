import React, { useState } from "react";
import { MdEmail } from "react-icons/md";
import { FaLock } from 'react-icons/fa'; 
import './form.css'
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from "yup";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";


const Sign = () =>{
    const [errorMessage, setErrorMessage] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema: Yup.object({
            email: Yup.string().email("Invalid email address").required("Email is required"),
            password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
        }),
        onSubmit: (values) => {
            setLoading(true);
            const auth = getAuth();
            
            // Use Firebase authentication to sign in
            signInWithEmailAndPassword(auth, values.email, values.password)
                .then((userCredential) => {
                    setLoading(false);
                    navigate("/"); // Redirect after successful login
                })
                .catch((error) => {
                    setLoading(false);
                    setErrorMessage("Invalid email or password"); // Set error message
                });
        },
    });
    
    return(
    <div className='Signform'>
        
            <div className='sign'>
                <h1>Sign In</h1>
                <p>Enter your account</p>
                <form onSubmit={formik.handleSubmit}>
                    <div className='email'>
                        
                        <MdEmail style={{ color: '#604E48', fontSize: '20px', marginRight: '10px' }}/>
                        <input type="email" placeholder="Email" name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}/>

                    </div>
                    {formik.touched.email && formik.errors.email && (
                        <div className="error-message">{formik.errors.email}</div>
                    )}

                    <div className="password">
                        <FaLock style={{ color: '#604E48', fontSize: '20px', marginRight: '10px' }}/>
                        <input type="password"
                            name="password"
                            placeholder="Password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}/>
                    </div>
                    {formik.touched.password && formik.errors.password && (
                        <div className="error-message">{formik.errors.password}</div>
                    )}

                    {errorMessage && <div className="error-message">{errorMessage}</div>}
                    <button type="submet" className="sign-in" disabled={loading}>Sign In</button>
                </form>
                <div className="account">
                <span>Don't have an account?</span>
                <Link to ="/Signup"  className="gosign-up">Sign Up</Link>
                </div>
            </div>
        </div>

  
   
        
    )
}

export default Sign;