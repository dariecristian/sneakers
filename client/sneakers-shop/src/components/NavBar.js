import React, {useContext} from 'react';
import {Context} from "../index";
import {Button, Container, Nav, Navbar} from "react-bootstrap";
import {ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {observer} from "mobx-react-lite";
import {useNavigate, NavLink} from "react-router-dom";
import Basket from "../pages/Basket";
import BasketPreview from "./BasketPreview";

const NavBar = observer(() => {
    const navigate = useNavigate()
    const {user} = useContext(Context)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        localStorage.removeItem('token')
    }

    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <NavLink style={{color: "white"}} className={"mt-2"} to={SHOP_ROUTE}>ESG</NavLink>
                <Navbar.Toggle aria-controls="navbarScroll"/>
                <Navbar.Collapse className="ml-auto">
                    {user.isAuth ? <Nav
                        className="ms-auto"
                        style={{maxHeight: '150px', color: "white"}}
                    >
                        <Button variant={"outline-light"} className="ms-3 mt-2" onClick={() => navigate(ADMIN_ROUTE)}>Admin Pannel</Button>
                        {/*<Button variant={"outline-light"} className="ms-3 mt-2" onClick={BasketPreview}>Cart</Button>*/}
                        <BasketPreview/>
                        <Button variant={"outline-light"} className="ms-3 mt-2" onClick={() => logOut()}>Log
                            out</Button>
                    </Nav> : <Nav
                        className="ms-auto"
                        style={{maxHeight: '150px', color: "white"}}
                    >
                        <Button variant={"outline-light"} className={"mt-2"} onClick={() => navigate(LOGIN_ROUTE)}>Sign in</Button>
                    </Nav>}
                </Navbar.Collapse>
            </Container>
        </Navbar>);
})

export default NavBar;
