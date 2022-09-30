import React, {useContext, useState} from 'react';
import {Button, Card, Container, Form, Row} from "react-bootstrap";
import {LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE} from "../utils/consts";
import {NavLink, useLocation, useNavigate} from "react-router-dom";
import {login, registration} from "../http/userAPI";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const Auth = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate();
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const click = async () => {
        try {
            let data
            if(isLogin) {
                data = await login(email, password)
            } else {
                data = await registration(email, password)
            }
            user.setUser(user)
            user.setIsAuth(true)
            console.log(data)
            navigate(SHOP_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (<Container className={"d-flex justify-content-center align-items-center"}
                       style={{height: window.innerHeight - 50}}>
        <Card style={{width: "50%"}} className={"p-4"}>
            <h4 className={"m-auto"}>{isLogin ? "Authorization" : "Registration"}</h4>
            <Form className={"d-flex flex-column"}>
                <Form.Control
                    className={"mt-4"}
                    placeholder={"Enter E-mail"}
                    value={email}
                    onChange={e => setEmail(e.target.value)}/>
                <Form.Control
                    className={"mt-3"}
                    placeholder={"Enter password"}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type={"password"}/>
                <Row className={"d-flex justify-content-between align-items-center mt-3 pe-3 ps-1 row-cols-auto"}>
                    {isLogin ? <div className={"d-flex"}>
                        New customer? <NavLink
                        style={{marginLeft: 8, textDecoration: "underline", fontWeight: "500"}}
                        to={REGISTRATION_ROUTE}>Sign up</NavLink>
                    </div> : <div className={"d-flex"}>
                        Have account? <NavLink
                        style={{marginLeft: 8, textDecoration: "underline", fontWeight: "500"}}
                        to={LOGIN_ROUTE}>Sign in</NavLink>
                    </div>}
                    <Button
                        variant={"outline-success"}
                        onClick={click}
                    >{ isLogin ? "Login" : "Registration"}</Button>
                </Row>
            </Form>
        </Card>
    </Container>);
})

export default Auth;