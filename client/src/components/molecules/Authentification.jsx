import styled from "styled-components";
import React from 'react';
import Label from './../atoms/Label';
import FieldConnection from './../atoms/FieldConnection';

const FieldContainer = styled.div`
    display: grid;
    width: 100%;
`;

const styleAuth = {
    display: 'grid',
    gridTemplateColumns: '40% 57%',
    gridTemplateRows: 'repeat(2, 35%)', 
    gridGap: '14% 3%',
    height: '100%'
};

class Authentification extends React.Component{

    render(){
        return (
            <div style={styleAuth}>
                <Label for="login" children="Pseudo" />
    
                <FieldContainer>
                    <FieldConnection type="text" onChange={(evt)=>this.props.setUsername(evt.target.value)} />
                </FieldContainer>
    
                <Label for="password" children="Mot de Passe"  />
    
                <FieldContainer>
                    <FieldConnection type="password" onChange={(evt)=>this.props.setPassword(evt.target.value)} />
                </FieldContainer>
            </div>
        )
    }
}


export default Authentification;