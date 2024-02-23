import './Search.css';
import {ChangeEvent, useState, FormEvent} from "react";

const Search = (props: SearchProps) : JSX.Element => {

    const [searchTerm, setSearchTerm] = useState<string>(props.initialSearchTerm);
    const [valid, setValid] = useState<boolean>(false);
    const [touched, setTouched] = useState<boolean>(false);

    const doSearch = (event:  FormEvent<HTMLFormElement>) : void => {
        event.preventDefault();
        if (valid) {
            props.setSearchTerm(searchTerm);
        }
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) : void => {
        setSearchTerm(event.target.value);
        setTouched(true);
        setValid (event.target.value.trim().length > 0);
    }

    const resetSearch = () : void => {
        setSearchTerm("");
        props.setSearchTerm("");
    }

    return (
        <div className="searchBox">
            <form onSubmit={doSearch}>
            <label htmlFor="orderId">Order Id:</label>
            <input id="orderId" type="text" value={searchTerm} onChange={handleChange} className={touched && !valid ? 'searchBoxError' : ''} />
            <button type="submit" disabled={!valid} >Search</button>
            <button onClick={resetSearch}>Reset</button>
            </form>
        </div>
    );
}

export default Search;

export type SearchProps = { initialSearchTerm : string, setSearchTerm : ( value : string) => void;}
