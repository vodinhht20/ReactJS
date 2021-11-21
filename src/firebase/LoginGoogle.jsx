
import { GoogleAuthProvider,signInWithPopup } from "firebase/auth";
import {auth} from "../firebase/firebase.config";
const  LoginGoogle = () => {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
}
export default LoginGoogle;