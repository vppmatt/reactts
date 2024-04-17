import {render, screen} from "@testing-library/react";
import {BrowserRouter} from "react-router-dom";
import Menu from "./Menu";
import '@testing-library/jest-dom';


test('menu contains the link to the search page', () => {
    render(<BrowserRouter>
        <Menu />
    </BrowserRouter>);
    const firstLink = screen.queryByText("Find", {exact: false} );
    expect(firstLink).toBeDefined();
    expect(firstLink).toHaveAttribute('href','/find');
});
