import './pageHeader.css';
import Menu from "./Menu";
import { Link } from 'react-router-dom';

const PageHeader = () : JSX.Element => {
    return (
        <div className="pageHeader">
            <h1><Link to="/">Payments Application</Link></h1>
            <Menu/>
        </div>
    );
}

export default PageHeader
