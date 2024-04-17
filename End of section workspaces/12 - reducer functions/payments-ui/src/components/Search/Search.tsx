import './Search.css';
import {ChangeEvent, useState, FormEvent} from "react";

const Search = () : JSX.Element => {

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [valid, setValid] = useState<boolean>(false);
    const [touched, setTouched] = useState<boolean>(false);

    const doSearch = (event:  FormEvent<HTMLFormElement>) : void => {
        event.preventDefault();
        console.log(searchTerm);
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) : void => {
        setSearchTerm(event.target.value);
        setTouched(true);
        setValid (event.target.value.trim().length > 0);
    }

    return (
        <div className="searchBox">
            <form onSubmit={doSearch}>
            <label htmlFor="orderId">Order Id:</label>
            <input id="orderId" type="text" value={searchTerm} onChange={handleChange} className={touched && !valid ? 'searchBoxError' : ''} />
            <button type="submit" disabled={!valid} >Search</button>
            </form>
        </div>
    );
}

export default Search
