import { Container, BoxRight } from './styled'

import BoxEsquerdo from "../../components/Box-Esquerdo"
import ContainerBoxRight from '../../components/Box-Direito/Cabecalho'

export default function Devschool() {
    return(
        <Container> 
            <BoxEsquerdo/>
            <BoxRight>
            <ContainerBoxRight/> 
            </BoxRight>
        </Container>
    )
}