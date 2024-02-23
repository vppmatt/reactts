import {render, screen} from "@testing-library/react";
import Transactions from "./Transactions";
import {BrowserRouter} from "react-router-dom";

jest.mock('../../../data/DataFunctions', () => {
    return {
        getCountries: ()  =>  Promise.resolve({data: ['a', 'b', 'c']})
    };
});

test('countries are displayed when loaded', async () => {

    render(<BrowserRouter>
        <Transactions searchTerm="" />
    </BrowserRouter>);

    const countrySelector : HTMLSelectElement = await screen.findByRole('combobox', {}, {timeout : 2000});   //note could find by ID but this is a chance to use findByRole!
    expect(countrySelector).toBeInTheDocument();
    expect(countrySelector.options).toHaveLength(4);
});
