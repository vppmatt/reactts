import './Search.css';
import {useState} from "react";
import {useNavigate, useParams} from 'react-router-dom';

type SearchProps ={selectedOrderId : string, setSelectedOrderId :(orderId : string) => void };

const Search = (props : SearchProps) => {

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [valid, setValid] = useState<boolean>(false);
    const [touched, setTouched] = useState<boolean>(false);
    const navigate = useNavigate();

    if (props.selectedOrderId != "" && props.selectedOrderId != searchTerm) {
        setSearchTerm(props.selectedOrderId);
    }

    const doSearch = (event : React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (valid) {
            props.setSelectedOrderId(searchTerm);
            navigate("/find/" + searchTerm);
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setTouched(true);
        setValid (event.target.value.trim().length > 0);
    }

    const clearForm = () => {
        setTouched(true);
        setSearchTerm("");
        props.setSelectedOrderId("");
        navigate("/find");
    }

    return (
        <div className="searchBox">
            <form onSubmit={doSearch}>
                <label htmlFor="orderId">Order Id:</label>
                <input id="orderId" type="text" value={searchTerm} onChange={handleChange} className={!valid && touched ? 'searchBoxError' : ''} />
                <button type="submit" disabled={!valid} >Search</button>
                <button type="button" onClick={clearForm} >Clear</button>
            </form>
        </div>
    );
}

export default Search
