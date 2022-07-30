import {render, screen} from "@testing-library/react";
import Transactions from "./Transactions";
import {BrowserRouter} from "react-router-dom";

jest.mock('../../../data/DataFunctions', () => {
    return {
        getAllCountries: () => {
            console.log("mocked version of getAllCountries is running")
            return Promise.resolve({ data : ['a','b','c'], status : 200})
        }
    };
});

test('countries are displayed when page is loaded', async () => {
    render(<BrowserRouter>
        <Transactions selectedOrderId="" />
    </BrowserRouter>);
    jest.setTimeout(2000);
    const countrySelector = await screen.findByRole('combobox');   //note could find by ID but this is a chance to use findByRole!
    expect(countrySelector).toBeInTheDocument();

});

test('all countries are displayed', async () => {

    render(<BrowserRouter>
        <Transactions selectedOrderId=""/>
    </BrowserRouter>);

    jest.setTimeout(2000);
    const options = await screen.findAllByRole('option');   //note could find by ID but this is a chance to use findByRole!

    expect(options).toHaveLength(4);

});
