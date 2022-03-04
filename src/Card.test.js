import React from "react";
import { render, fireEvent } from "@testing-library/react";
import Card from "./Card";

//Smoke test 
it('renders with out crashing', () => {
    render(<Card />)
})

//Snapshot test 

it('makes snapshot', () => {
    const {asFragment} = render(<Card />)
    expect(asFragment()).toMatchSnapshot()
})