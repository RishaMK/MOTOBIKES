import { useState } from 'react';
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { doSignInWithEmailAndPassword } from '../firebase/auth';
import { useAuth } from '../contexts/authContext';
import './Login.css';
import Navbar from './Navbar';

const Login = () => {
    const { userLoggedIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSigningIn, setIsSigningIn] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [isAdmin, setIsAdmin] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!isSigningIn) {
            setIsSigningIn(true);
            try {
                await doSignInWithEmailAndPassword(email, password);
                if (isAdmin) {
                    if (email === 'admin@gmail.com') {
                        navigate('/admin/AdminDashboard');
                    } else {
                        alert('You are not authorized to log in as admin.');
                        setIsSigningIn(false);
                    }
                } else {
                    navigate('/home');
                }
            } catch (error) {
                console.log("login error", error);
                alert('Invalid credentials. Please register to log in :)');
                setIsSigningIn(false);
            }
        }
    };

    return (
        <div>
            <Navbar />
            <div>
                {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}
                <div className='login-container'>
                    <div className='login-nondeco'>
                        <div className="login-wrapper">
                            <div className="login-box">
                                <h1>LOGIN</h1>
                                <form onSubmit={handleSubmit} className='login-form'>
                                    <div className='form-inputs'>
                                        <div className="input-labels">
                                            <label htmlFor="exampleInputEmail1" className="">
                                                <strong>Email Id</strong>
                                            </label>
                                            <label htmlFor="exampleInputPassword1" className="">
                                                <strong>Password</strong>
                                            </label>
                                        </div>

                                        <div className="inputs">
                                            <input
                                                type="email"
                                                placeholder="Enter Email"
                                                id="exampleInputEmail1"
                                                onChange={(event) => setEmail(event.target.value)}
                                                required
                                            />
                                            <input
                                                type="password"
                                                placeholder="Enter Password"
                                                id="exampleInputPassword1"
                                                onChange={(event) => setPassword(event.target.value)}
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="admin-toggle">
                                        <label>
                                            <input
                                                type="checkbox"
                                                checked={isAdmin}
                                                onChange={() => setIsAdmin(!isAdmin)}
                                            />
                                            Login as Admin
                                        </label>
                                    </div>
                                    <button type="submit" className="login-button">LOGIN</button>
                                </form>
                                <h3>Don't have an account?</h3>
                                <Link to='/register'><button className="register-button">REGISTER</button></Link>
                            </div>
                        </div>
                    </div>
                    <div className='login-deco'></div>
                </div>
            </div>
        </div>
    );
};

export default Login;
