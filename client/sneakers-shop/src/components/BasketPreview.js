import React from 'react';
import Basket from "../pages/Basket";
import {Button, DropdownButton, Dropdown} from "react-bootstrap";
import {useContext} from "@types/react";
import {Context} from "../index";

const BasketPreview = () => {
    // const {basket} = useContext(Context)
    return (
        <DropdownButton variant={"outline-light"} className="ms-3 mt-2" id="dropdown-basic-button" title="Cart">

            {/*<Dropdown.Item href="#/action-1">Action</Dropdown.Item>*/}
            {/*<Dropdown.Item href="#/action-2">Another action</Dropdown.Item>*/}
            {/*<Dropdown.Item href="#/action-3">Something else</Dropdown.Item>*/}
        </DropdownButton>
    );
};

export default BasketPreview;