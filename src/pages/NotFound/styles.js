import styled from 'styled-components';

import { COLORS } from '../../globalStyles';

export const NotFoundStyle = styled.div`
  button {
    position: fixed;
    bottom: 20vh;
    background-color: ${COLORS.celtic_blue};
    border-color: ${COLORS.celadon_blue};
  }
  button:hover{
    background-color: ${COLORS.prussian_blue};
    border-color: ${COLORS.celadon_blue};
  }
  footer { 
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;