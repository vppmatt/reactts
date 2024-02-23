import { Link } from "react-router-dom";


const Menu = () : JSX.Element => {
    return (
        <ul className="nav">
            <li><Link to="/find">Find a transaction</Link></li>
            <li><Link to="/add">New transaction</Link></li>
        </ul>
    );
}

export default Menu;
