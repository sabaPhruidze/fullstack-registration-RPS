import styled,{css} from "styled-components";

export const Errors = styled.p`
   ${({theme}) => css`
    width:100%;
    padding:0 10px;
    font-size:18px;
    color:red;
    border:${theme.white};
    text-shadow: 1px 1px 2px ${theme.neonRed};
    text-align:center;
    border:1px solid ${theme.white};
    margin-bottom:5px;
   `}
`