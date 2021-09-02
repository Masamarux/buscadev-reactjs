import styled from 'styled-components';

import { COLORS } from '../../globalStyles';

export const NotFoundBoxStyle = styled.div`
  text-align: center;

  h1{
    margin-top: 38vh;
    font-size: 100px;
    font-family: 'ZCOOL KuaiLe', cursive;
    color: ${COLORS.imperial_red};
    text-shadow: ${COLORS.prussian_blue} 5px 5px;
  }
  p{
    font-size: 20px;
  }
`;