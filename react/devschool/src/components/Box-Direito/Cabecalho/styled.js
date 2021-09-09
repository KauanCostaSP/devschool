import styled from 'styled-components'

const ContainerBoxRight = styled.div`
.Retangulo-3{
    display: flex;
    flex-direction: row;
    background-color: white;
}

.foto-de-perfil img{
    margin: 0.7em 0em 0.5em 2em;
    height: 3em;
    border-radius: 3em;
}

.Nome-do-Usuario{
    margin: 2.4em 0em 0em 1em;
    font-family: Roboto-200;
    font-size: 12px;
}

.Nome-do-Usuario b{
    color: #615858;
}

.Botoes-sair-reloud{
display: flex;
flex-direction: row;
margin-left: 41em;
}

.Reloud img{
    margin-top: 20px;
    height: 2em;
}

.Reloud img:hover{
    cursor: pointer;
}

.Sair img{
    margin-top: 20px;
    height: 2em;
    padding-right: 3em;
}

.Sair img:hover{
    cursor: pointer;
}
`
export { ContainerBoxRight }