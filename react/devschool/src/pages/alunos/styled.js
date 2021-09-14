import styled from "styled-components";

const Container = styled.div`
display: flex;
flex-direction: row;
height: 100vh;
background-color: #F5F5F5;

.linha-roxa{
    margin: 1.7em 0em 0em 2.5em;
}

.Retangulo-4{
    display: flex;
    flex-direction: column;
    background-color: white;
    margin: 1.5em 0em 0em 2.5em;
    padding: 0em 0em 2em 0em;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25);
    max-width: 57em;
}

.title-retangulo-4-5{
    display: flex;
    margin: 1em 0em 0em 0.5em;
    padding: 0em 0em 0em 0em;
    font-size: 1.6em;
    font-family: Roboto-400;
    color: #3C3939;
}

.cadastro-e-alterar{
    display: flex;
    flex-direction: column;
    margin: 2em 0em 0em 0em;
    font-family: Roboto-300;
    color: #615858;
    
   
}

.parte-1{
    display: flex;
    flex-direction: row;
    margin-bottom: 14px;
    margin-left: 3.5em;
}

.parte-2{
    display: flex;
    flex-direction: row;
    margin-left: 1.9em;
    margin-right: 2em;
}


label{
    margin-right: 10px;
    margin-top: 8px;
    
}

input{
margin-right: 3em;
height: 2.5em;
min-width: 15em;
padding-left: 5px;
font-family: Roboto-200;
border-radius: 5px;
border: 1px solid #A8A8A8;
}

.parte-2 button{
    color: white;
    font-family: Roboto-300;
    padding: 5px 20px 5px 20px;
    background: #E911C6;
    border-radius: 44px;
    border: 0px;
}

.parte-2 button:hover{
    cursor: pointer;
}



.Retangulo-5{
    display: flex;
    flex-direction: column;
    background-color: white;
    margin: 1.5em 0em 0em 2.5em;
    padding: 0em 0em 1.5em 0em;
    box-shadow: 0px 0px 4px 1px rgba(186, 186, 186, 0.25); 
    max-width: 57em;
}

.retangulo-e-title{
    display: flex;
    flex-direction: row;
}

table{
    border-collapse: collapse;
    margin-left: 2em;
    margin-top: 1.5em;
    border: 1px solid #E2E2E2;;
}

thead tr{
    background-color: #986CDF !important; 
    color: white;
    font-size: 14px;
    font-family: Roboto-400;
}

th{
    padding: 16px 32px 16px 32px;
}

td{
    color: #6D6868;
    font-size: 13px;
    font-family: Roboto-300;
    padding: 16px 58px 16px 32px;
}

td img{
    height: 2em;
    margin-top: 10px;
    cursor: pointer;
    margin-left: 6px
}

tr:nth-child(odd){
    background-color: #F5F5F5;;
}

.editar-deletar-td{ 
    display: table; float:right; margin-right:1em
}

`

const BoxRight = styled.div`
display: flex;
flex-direction: column;
width: 100%;
`

export { Container, BoxRight}