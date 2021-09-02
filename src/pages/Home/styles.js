import styled from 'styled-components';

import { COLORS } from '../../globalStyles';

export const HomeStyles = styled.div`
  margin: calc(20px + 20vh) 0 0 0;
  text-align: center;
  height: 100%;
  .Title {
    text-shadow: ${COLORS.prussian_blue} 2px 2px;
    font-size: 10vw !important;
  }
  footer{
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
  }
`;