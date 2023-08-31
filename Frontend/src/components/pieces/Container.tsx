import styled,{css} from "styled-components";

export const Container = styled.div`
    ${({theme}) => css`
        width:650px;
        background-color: ${theme.white};
        border: 3px solid ${theme.green.light};
        border-radius: 15px;
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        padding:20px 30px;
        position:relative;
        z-index:0;
`}`