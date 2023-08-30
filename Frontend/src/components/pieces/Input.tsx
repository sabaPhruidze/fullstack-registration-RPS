import styled from "styled-components";

export const Input = styled.input`
    width:100%;
    height: 50px;
    border-radius: 10px;
    margin-bottom:15px;
    &:focus {
        outline:0;
        border: 2px solid ${({theme})=> theme.green.neon};
        box-shadow: 0 0 10px 2px ${({theme})=> theme.green.medium};
    }
`