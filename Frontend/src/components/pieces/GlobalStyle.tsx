import {createGlobalStyle} from 'styled-components'

export const Globalstyles = createGlobalStyle`
    * {
        margin:0;
        padding:0;
        box-sizing:border-box;
    }
    body {
        width:100vw;
        height:100vh;
        background-color:${({theme}) => theme.green.lightplus};// descruturisation
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
    }
`