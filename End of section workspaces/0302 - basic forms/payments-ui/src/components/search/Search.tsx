import './Search.css';
import {useState} from "react";

const Search = () => {

    const [searchTerm, setSearchTerm] = useState<string>("");
    const [valid, setValid] = useState<boolean>(false);
    const [touched, setTouched] = useState<boolean>(false);

    const doSearch = (event : React.MouseEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (valid) {
            alert(searchTerm);
        }
    }

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
        setTouched(true);
        setValid (event.target.value.trim().length > 0);
    }

    return (
        <div className="searchBox">
            <form onSubmit={doSearch}>
                <label htmlFor="orderId">Order Id:</label>
                <input id="orderId" type="text" value={searchTerm} onChange={handleChange} className={!valid && touched ? 'searchBoxError' : ''} />
                <button type="submit" disabled={!valid} >Search</button>
            </form>
        </div>
    );
}

export default Search
