import style from 'styled-components'

type Containerprops = {
    bgcolor: string;
}

export const Container = style.div<Containerprops>`
    max-width: 800px;
    margin: auto;
    background-color: ${props => props.bgcolor};
    font-weight: bold;
    color: #ccc;
    padding: 25px;

    @media(max-width: 650px){
        background-color: green;
        display: flex;
        flex-direction: column;
    }

    span{
        color: Black;
    }

    .link{
        color: pink;

        &:hover{
            color:orange
        }
    }
`

type Botaoprops = {
    small?: boolean,
    bg?: string
}

export const Botao = style.button<Botaoprops>`
    background-color: ${props => props.bg};
    color: #fff;
    border-style: 2px solid #000;
    margin: 10px;
    font-size: ${props => props.small ? '10px':'30px'};
    cursor: pointer;
    border-radius: 5px;
`