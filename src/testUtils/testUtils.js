import React from "react";
import { Router, Route } from "react-router-dom";
import { render } from "@testing-library/react";
import { createMemoryHistory } from "history";

export const renderWithRouter = (ui, 
    {
        path="/",
        route="/",
        history = createMemoryHistory({ initialEntries: [route] }) 
    }={}) => ( 
    render( 
        <Router history={history}> 
            <Route path={path} children={ui} /> 
        </Router> 
    ) 
)