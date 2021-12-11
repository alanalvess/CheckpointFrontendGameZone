import { Helmet } from 'react-helmet';
import './style.scss'

const Jogos = () => {

  return (
    <>
      <Helmet>
        <title>GameZone | Sobre</title>
      </Helmet>
      <div className="sobre">
        <h2>Sobre Nós</h2>
        <p>
          Projeto realizado pelos alunos do 3° Bimestre do curso de Certified Tech Developer da Digital House para entrega do Checkpoint Final.
          Esta foi a primeira atividade em que aplicamos os conhecimentos de forma integrada com as disciplinas de Front-End, Back-End e Infraestrutura.
        </p>
        <h3>Estrutura Utilizada:</h3>
        <ul>
          <li className="lista">Back-End
            <ul>
              <li>Linguagem de Programação Java</li>
              <li>Framework Spring</li>
              <li>Padrão MVC de projetos</li>
              <li>Banco de Dados MySQL</li>
              <li>Implementação de API para uso do Front-End</li>
            </ul>
          </li>
          <li className="lista">Front-End
            <ul>
              <li>Linguagem de Marcação HTML5</li>
              <li>Linguagem de Estilização SASS</li>
              <li>React</li>
              <li>Biblioteca React-Botstrap</li>
              <li>Utilizar API desenvolvida pelo Back-End</li>
            </ul>
          </li>
          <li className="lista">Infraestrutura
            <ul>
              <li>Implementar e disponibilizar a API na AWS EC2</li>
              <li>Hospedar o Front-End  no ambiente Vercel.</li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  )
}
export default Jogos;