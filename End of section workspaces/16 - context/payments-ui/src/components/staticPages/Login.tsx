import {useContext} from "react";
import {useNavigate} from "react-router-dom";
import { UserContext, userContextType } from "../../context/context";

const Login = () : JSX.Element => {

    const userContext = useContext<userContextType>(UserContext);
    const navigate = useNavigate();

    const login = () : void => {
        //call to REST would be here
        userContext.login({id:1,name : "Matt", role: "admin"});
        navigate("/");
    }

    return (<p>
        This is where the login form would go
        <button onClick={login}>login</button>
    </p>)
}

export default Login;