import { Link } from "react-router-dom";
import { UserContext, userContextType } from "../../context/context";
import { useContext } from "react";


const Menu = () : JSX.Element => {

    const userContext = useContext<userContextType>(UserContext);

    return (
        <ul className="nav">
            <li><Link to="/find">Find a transaction</Link></li>
            <li><Link to="/add">New transaction</Link></li>
            {userContext.id === 0 && <li><Link to="/login">Log in</Link></li>}
        </ul>
    );
}

export default Menu;
