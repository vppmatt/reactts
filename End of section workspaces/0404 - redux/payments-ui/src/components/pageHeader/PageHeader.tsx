import './PageHeader.css';
import Menu from "./Menu";
import {Link} from 'react-router-dom';

const PageHeader = () => {
    return (
        <div className="pageHeader">
            <h1><Link to="/">Payments Application</Link></h1>
            <Menu/>
        </div>
    );
}

export default PageHeader
