import styled,{css} from "styled-components";

export const Container = styled.div`
    ${({theme}) => css`
        width:650px;
        height:700px;
        background-color: ${theme.green.dark};
        border: 3px solid ${theme.white};
        border-radius: 15px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding:20px 30px;
`}`