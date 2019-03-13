import styled from 'styled-components';

const Button = styled.button`
    background-color:${props => props.bgColor};
    border-radius: 5px;
    border: none;
    padding: 5px 15px;
    height: 35px;
    font-size:18px;
`;

export default Button;