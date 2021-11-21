import { FacebookAuthProvider,signInWithPopup } from "firebase/auth";
import {auth} from "../firebase/firebase.config";

export default function LoginFacebook() {
    const provider = new FacebookAuthProvider();
    return signInWithPopup(auth, provider);
}