import {Container, BoxRight} from './styled'

import Menu from "../../components/menu"
import Cabecalho from "../../components/cabecalho"

export default function site() {
    return(
        <Container> 
            <Menu />
            <BoxRight>
                <Cabecalho />
                
                <div className="Retangulo-4"> 
                  <div className="retangulo-e-title">
                     <div className="linha-roxa"><img src="/assets/images/Retangulo-roxo.png" alt="" /></div>
                     <div className="title-retangulo-4-5">Novo Aluno</div>
                  </div>
                  <div className="cadastro-e-alterar">

                    <div className="parte-1">
                      <label for="nome">Nome:</label>
                      <input type="text" id="nome" name="nome"/>
                      <label for="curso">Curso:</label>
                      <input type="text" id="curso" name="curso"/>
                    </div>

                    <div className="parte-2">
                      <label for="nome">Chamada:</label>
                      <input type="text" id="chamada" name="chamada"/>
                      <label for="curso">Turma:</label>
                      <input type="text" id="turma" name="turma"/>

                      <button> Cadastrar </button>

                    </div>
                  </div>
              </div>


              <div className="Retangulo-5"> 
                  <div className="retangulo-e-title"> 
                    <div className="linha-roxa"><img src="/assets/images/Retangulo-roxo.png" alt=""/></div>
                    <div className="title-retangulo-4-5">Alunos Matriculados </div>
                  </div>  
  

                  <div class="tabela-alunos">
                    <table>
                      <thead> 
                        <tr>
                          <th>ID</th>
                          <th align="left">Nome</th>
                          <th>Chamada</th>
                          <th>Turma</th>
                          <th align="left">Curso</th>
                          <th></th>
                        </tr>  
                      </thead>
                      <tbody>
                        <tr>
                          <td>1</td>
                          <td>Fulao da Silva Sauro</td>
                          <td>14</td>
                          <td>InfoX</td>
                          <td>Informática </td>
                          <td className='editar-deletar-td'><img  src="/assets/images/Editar.png" alt=""/> <img src="../../assets/images/Deletar.png" alt=""/></td>
                        </tr>  
                        <tr>
                          <td> 2</td>
                          <td>Fulao da Silva Sauro</td>
                          <td>15</td>
                          <td>InfoX</td>
                          <td>Informática</td>
                          <td className='editar-deletar-td'><img  src="/assets/images/Editar.png" alt=""/> <img src="../../assets/images/Deletar.png" alt=""/></td>
                        </tr>  
                        <tr>
                          <td>3</td>
                          <td>Fulao da Silva Sauro</td>
                          <td>16</td>
                          <td>InfoX</td>
                          <td>Informática</td>
                          <td className='editar-deletar-td'><img  src="/assets/images/Editar.png" alt=""/> <img src="../../assets/images/Deletar.png" alt=""/></td>
                        </tr>
                        <tr>
                          <td>4</td>
                          <td>Fulao da Silva Sauro</td>
                          <td>17</td>
                          <td>InfoX</td>
                          <td>Informática</td>
                          <td className='editar-deletar-td'><img  src="./assets/images/Editar.png" alt=""/> <img src="../../assets/images/Deletar.png" alt=""/></td>
                        </tr>
                        <tr>
                          <td>5</td>
                          <td>Fulao da Silva Sauro</td>
                          <td>18</td>
                          <td>InfoX</td>
                          <td>Informática</td>
                          <td className='editar-deletar-td'><img  src="/assets/images/Editar.png" alt=""/> <img src="../../assets/images/Deletar.png" alt=""/></td>
                        </tr>
                        <tr>
                          <td>6</td>
                          <td>Fulao da Silva Sauro</td>
                          <td>19</td>
                          <td>InfoX</td>
                          <td>Informática</td>
                          <td className='editar-deletar-td'><img  src="/assets/images/Editar.png" alt=""/> <img src="../../assets/images/Deletar.png" alt=""/></td>
                        </tr>
                        <tr>
                          <td>7</td>
                          <td>Fulao da Silva Sauro</td>
                          <td>20</td>
                          <td>InfoX</td>
                          <td>Informática</td>
                          <td className='editar-deletar-td'><img  src="/assets/images/Editar.png" alt=""/> <img src="../../assets/images/Deletar.png" alt=""/></td>
                        </tr>
                        <tr>
                          <td>8</td>
                          <td>Fulao da Silva Sauro</td>
                          <td>21</td>
                          <td>InfoX</td>
                          <td>Informática</td>
                          <td className='editar-deletar-td'><img  src="/assets/images/Editar.png" alt=""/> <img src="../../assets/images/Deletar.png" alt=""/></td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>

            </BoxRight>
        </Container>
    )
}