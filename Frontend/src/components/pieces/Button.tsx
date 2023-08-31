import styled from "styled-components";

export const Button = styled.button`
    width:200px;
    height:50px;
    font-size:20px;
    background-color:${props => props.theme.green.dark};
    color:${props => props.theme.white};
    border-radius:10px;
    transition:0.5s ease;
    cursor:pointer;
    &:hover {
        transform:scale(1.10);
        border:2px solid ${props => props.theme.green.light};
    }
    
`