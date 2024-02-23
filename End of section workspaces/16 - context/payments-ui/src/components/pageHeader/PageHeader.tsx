import './pageHeader.css';
import Menu from "./Menu";
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext, userContextType } from '../../context/context';

const PageHeader = () : JSX.Element => {

    const userContext = useContext<userContextType>(UserContext);

    return (
        <div className="pageHeader">
            <h1><Link to="/">Payments Application</Link></h1>
            <Menu/>
            { userContext.id !== 0 &&  <p>Current user: {userContext.name} <button onClick={userContext.logout}>logout</button>  </p>}
        </div>
    );
}

export default PageHeader
