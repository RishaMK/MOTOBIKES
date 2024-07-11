import { useState } from 'react';
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import './Register.css';
// import { SnackbarContent, enqueueSnackbar, useSnackbar } from 'notistack';  //figure out snackbar pls alert looks so meh
import {useAuth} from '../contexts/authContext';
import { doCreateUserWithEmailAndPassword } from '../firebase/auth';


const Register = () => {


    const { userLoggedIn } = useAuth();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [isRegistering,setIsRegistering] = useState(false);
    // const [errorMessage, setErrorMessage] = useState ('');    //find diff possible error messages and send alert errors to client
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        if(!isRegistering){
            setIsRegistering(true);
            try{
                await doCreateUserWithEmailAndPassword(email,password);
            }catch(error){
                console.log(error);
                alert(error.message);
            }
        }
    }


    return (
        <div>
            {userLoggedIn && (<Navigate to={'/home'} replace={true}/>)}
            <div className='register-container'>
            <div className='register-deco'></div>
            <div className='register-nondeco'><div className="register-wrapper">
                <div className="register-box">
                    <h1>REGISTER</h1>
                    <form onSubmit={handleSubmit} className='registration-form'>
                        <div className='form-inputs'>
                        <div className="input-labels">
                            {/* <label htmlFor="exampleInputName" className="">
                                <strong>Name</strong>
                            </label> */}
                            <label htmlFor="exampleInputEmail1" className="">
                                <strong>Email Id</strong>
                            </label>
                            <label htmlFor="exampleInputPassword1" className="">
                                <strong>Password</strong>
                            </label> 
                        </div>

                        <div className="inputs">
                            {/* <input
                                type="text"
                                placeholder="Enter Name"
                                id="exampleInputName"
                                onChange={(event) => setName(event.target.value)}
                                required
                            /> */}
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
                        <button type="submit" className="register-btn">REGISTER</button>
                    </form>

                    <h3 className=''>Already have an account ?</h3>
                    <Link to='/login'><button className="login-btn">LOGIN</button></Link>
                </div>
            </div></div>
        </div>
        </div>
    );
};

export default Register;