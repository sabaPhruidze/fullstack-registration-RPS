import styled,{css} from "styled-components";

export const Errors = styled.p`
   ${({theme}) => css`
    width:100%;
    padding:10px;
    font-size:20px;
    color:red;
    border:${theme.white};
    text-shadow: 1px 1px 2px ${theme.neonRed};
    text-align:center;
    border:1px solid ${theme.white};
    border-radius:20px;
    margin-bottom:10px;
   `}
`