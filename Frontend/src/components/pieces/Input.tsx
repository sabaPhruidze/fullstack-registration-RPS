import styled from "styled-components";

export const Input = styled.input`

    width:100%;
    height: 40px;
    border-radius: 10px;
    margin-bottom:15px;
    padding: 0 10px;
    font-size:20px;
    border:1px solid ${({theme}) => theme.green.middle};
    transition:0.5s ease;
    &:focus {
        outline:0;
        border: 1px solid ${({theme})=> theme.green.neon};
        box-shadow: 0 0 5px 2px ${({theme})=> theme.green.light};
        transform:scale(1.05);
    }
`