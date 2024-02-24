import React from "react";
import logo from "../../assets/logo-dio.png"
import {
    FindInputContainer,
    Row,
    Input,
    Menu,
    Container,
    Wrapper
 } from './styles';
import { Button } from "../Button";


const Header = () => {
    return(
        <Wrapper>
            <Container>
                <Row>
                    <img src={logo} alt='Logo'/>
                    <FindInputContainer>
                        <Input placeholder="Search Something..."/>
                    </FindInputContainer>
                    <Menu>Live Code</Menu>
                    <Menu>Global</Menu>
                </Row>
                <Row>
                    <Button title={'Home'}/>
                    <Button title={'Entrar'}/>
                    <Button title={'Cadastrar'}/>
                </Row>
            </Container>
        </Wrapper>
    )

}

export { Header }