import styled from "styled-components";

export const Input = styled.input`
@font-face {
    font-family: opensans;
    src: url(../../assets/font/OpenSans_Condensed-Bold.ttf);
}
    width:100%;
    height: 50px;
    border-radius: 10px;
    margin-bottom:15px;
    padding: 0 10px;
    font-family: opensans;
    &:focus {
        outline:0;
        border: 2px solid ${({theme})=> theme.green.neon};
        box-shadow: 0 0 10px 2px ${({theme})=> theme.green.medium};
    }
`