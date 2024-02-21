import './pageHeader.css';
import Menu from "./Menu";

const PageHeader = () : JSX.Element => {
    return (
        <div className="pageHeader">
            <h1>Payments Application</h1>
            <Menu/>
        </div>
    );
}

export default PageHeader
