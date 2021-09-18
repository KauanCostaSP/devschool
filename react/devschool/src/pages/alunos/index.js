import {Container, BoxRight} from './styled'

import Menu from "../../components/menu"
import Cabecalho from "../../components/cabecalho"
import { useState, useEffect } from 'react';
import Api from '../../service/api'

const api = new Api();


export default function Index() {

  const [alunos, setAlunos] = useState([]);

  async function listar() {
    let r = await api.listar()
    setAlunos(r);
  }

  useEffect(() => {
      listar();
  }, [])

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
                      <label>Nome:</label>
                      <input type="text" id="nome" name="nome"/>
                      <label>Curso:</label>
                      <input type="text" id="curso" name="curso"/>
                    </div>

                    <div className="parte-2">
                      <label>Chamada:</label>
                      <input type="text" id="chamada" name="chamada"/>
                      <label>Turma:</label>
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
  

                  <div className="tabela-alunos">
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

                          {alunos.map(item =>

                               <tr>
                                  <td>{item.id_matricula}</td>
                                  <td>{item.nm_aluno}</td>
                                  <td>{item.nr_chamada}</td>
                                  <td>{item.nm_turma}</td>
                                  <td>{item.nm_curso}</td>
                                  <td className='editar-deletar-td'><img  src="/assets/images/Editar.png" alt=""/> <img src="../../assets/images/Deletar.png" alt=""/></td>
                             </tr>  
 
                            )}

                      </tbody>
                    </table>
                  </div>
                </div>

            </BoxRight>
        </Container>
    )
}