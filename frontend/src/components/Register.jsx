import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';
import { doCreateUserWithEmailAndPassword } from '../firebase/auth';
import { firestore } from '../firebase/firebase'; 
import Navbar from './Navbar';
import { collection, doc, setDoc } from 'firebase/firestore'; 
import './register.css';

const Register = () => {
    const { userLoggedIn } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(false);
    const navigate = useNavigate();
    const [isAdminChecked, setIsAdminChecked] = useState(false); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!isRegistering) {
            setIsRegistering(true);
            try {
                if (!isValidEmail(email)) {
                    throw new Error('Please enter a valid email address.');
                }
                const userCredential = await doCreateUserWithEmailAndPassword(email, password);
                await saveUserRole(userCredential.user.uid, isAdminChecked);
                console.log('User registered successfully:', userCredential.user);
                navigate(isAdminChecked ? '/admin/AdminDashboard' : '/home');
            } catch (error) {
                console.log(error);
                alert(error.message);
            } finally {
                setIsRegistering(false);
            }
        }
    };

    const isValidEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const saveUserRole = async (userId, isAdmin) => {
        const usersCollection = collection(firestore, 'users');
        const userDoc = doc(usersCollection, userId);
        const role = isAdmin ? 'admin' : 'user';
        await setDoc(userDoc, { role: role });
    };

    return (
        <div>
            <Navbar />
            <div>
                {userLoggedIn && (<Navigate to={'/home'} replace={true} />)}
                <div className='register-container'>
                    <div className='register-deco'></div>
                    <div className='register-nondeco'>
                        <div className="register-wrapper">
                            <div className="register-box">
                                <h1>REGISTER</h1>
                                <form onSubmit={handleSubmit} className='registration-form'>
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
                                                checked={isAdminChecked}
                                                onChange={() => setIsAdminChecked(!isAdminChecked)} 
                                            />
                                            Register as Admin
                                        </label>
                                    </div>
                                    <button type="submit" className="register-btn">REGISTER</button>
                                </form>

                                <h3 className=''>Already have an account?</h3>
                                <Link to='/login'><button className="login-btn">LOGIN</button></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;
