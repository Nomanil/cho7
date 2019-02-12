import styled from "styled-components";
import React, {Component} from 'react';

const FooterContainer = styled.div`
    padding: 4vh 3vw;
    font-size: 22px;
    width: 90vw;
    margin-right: auto;
    margin-left: auto;
    margin-bottom: 2vh;

    font-family: 'Almendra SC', Arial;
    text-align: center;

    background: rgba(213, 191, 159, 0.67);
    border-radius: 10px;
    display: flex;
    justify-content: space-around;
`;

export default class FooterTemplate extends Component{
    render(){
        return(
            <FooterContainer>
                <a href="/">La Compagnie de l'Aventure</a>
                <a href="/about">À propos</a>
            </FooterContainer>
        )
    }
}