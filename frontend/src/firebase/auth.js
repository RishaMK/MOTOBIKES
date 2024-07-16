import { createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth';
import { auth } from './firebase';


//register user
export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

//sign in user
export const doSignInWithEmailAndPassword = (email, password) => {
    return signInWithEmailAndPassword(auth,email,password);
};

//sign out the user
export const doSignOut = () => {
    return auth.signOut();
}
