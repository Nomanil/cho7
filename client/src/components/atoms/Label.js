import styled from 'styled-components';
import theme from './../../theme.json';

const Label = styled.label`
    font-family:${theme.fontFamily.label};
    font-size:${props => props.fontS || "20px"};
    color:${props => props.fontC || "black"};
    border:${props => props.border || "none"};

`;

export default Label;