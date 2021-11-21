import {Navigate} from "react-router-dom";
import { isAuthenticate } from "../../authenticate";
import Error403 from "./Error403";

const PrivateAdmin = ({children}) => { 
    const auth = isAuthenticate();
    if (!auth || auth.role !== 1) {
        return <Error403 />
    }
    return children;
}
export default PrivateAdmin;