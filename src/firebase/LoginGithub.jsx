
import { GithubAuthProvider,signInWithPopup } from "firebase/auth";
import {auth} from "../firebase/firebase.config";
const  LoginGithub = () => {
    const provider = new GithubAuthProvider();
    return signInWithPopup(auth, provider);
}
export default LoginGithub;