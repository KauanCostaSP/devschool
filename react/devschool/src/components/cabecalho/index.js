import { Container } from "./styled";

export default function site() {
    return (
        <Container>
          <div className="cabecalho-box-right">   
            <div className="Retangulo-3"> 
              <div className="foto-de-perfil"> <img src="../assets/images/Kauan-Costa.jpg" alt="" />  </div>
              <div className="Nome-do-Usuario" alt="" > Olá, <b >Kauan Costa Nunes</b> </div>
               <div className="Botoes-sair-reloud">
                 <div className="Reloud"> <img src="../assets/images/Reloud.JPG" alt="" /> </div>
                 <div className="Sair"> <img src="../assets/images/Sair.JPG" alt="" /> </div>
               </div>
            </div>
          </div>
        </Container>
    )
}