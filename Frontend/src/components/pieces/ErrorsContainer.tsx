import styled from "styled-components";

export const ErrorsContainer = styled.div`
    width:400px;
    position:absolute;
    z-index:2;
    background-color:${props => props.theme.white};
    top:calc(100% / 3);
    left:calc(100% / 2 - 200px);
    border-radius:10px;
`