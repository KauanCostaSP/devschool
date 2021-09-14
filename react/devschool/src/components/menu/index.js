import { Container } from "./styled";

export default function site() {
    return (
        <Container>
        <div className="box-left">
          <div className="conteudo-box-left">
            <div className="cabecalho-box-left">
              <div className="book-box-left"> <img src="../assets/images/book.JPG" alt=""/> </div>
              <div className="text-box-left"> &nbsp; <b>Dev</b>School</div>
            </div>
            <div className="retangulo-1"> </div>
             <div className="box-gerenciamento"> Gerenciamento <img src="../assets/images/setinha-para-baixo.JPG" alt="" /></div>
               <div className="retangulo-2"> <div className="Retangulo-rosa"></div>Alunos</div>
             </div>
        </div>
        </Container>
    )
}