import React from 'react';

import { Alert } from 'react-bootstrap';
import { BsDot } from 'react-icons/bs';

import { AlertsStyle } from './styles';

function Alerts(props) {
  return (
    <div>
      <AlertsStyle>
        <Alert className="Alert">
          <p>
            Você será levado para uma página com o perfil do usuário após clicar em pesquisar!
            Utilize seu usuário do GitHub ou de algum amigo, caso não tenha ou não saiba, deixarei algumas sugestões de usuários para testar a aplicação:
          </p>
          <p>
            masamarux (o meu) <BsDot/> diego3g <BsDot/> iamshaunjp <BsDot/> anabneri <BsDot/> GrahamCampbell 
          </p>
        </Alert>
        <Alert className="Alert">
          <p>
            Erros estão acontecendo com usuários que na verdade são organizações ou grupos, e usuários normais com mais de 100 repositórios. Nesses casos a aplicação retorna uma página de não encontrado muito linda(quando tiver estilização) e em casos mais graves ela crasha e a única coisa que verá é o fundo cor Honey Dew(quando tiver estilização), isso será resolvido em breve. Alguns exemplos abaixo de usuários que retornam erro:
          </p>
          <p>
            loiane <BsDot/> ornicar <BsDot/> facebook <BsDot/> octokit
          </p>
        </Alert>
      </AlertsStyle>
    </div>
  );
}

export default Alerts;