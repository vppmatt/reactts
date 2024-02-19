import './Search.css';

const Search = () => {

    return (
        <div className="searchBox">
            <label htmlFor="orderId">Order Id:</label>
            <input id="orderId" type="text" />
            <button>Search</button>
        </div>
    );
}

export default Search
