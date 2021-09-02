import styled from 'styled-components';

import { COLORS } from '../../globalStyles';

export const FooterStyle = styled.div`
  text-align: center;
  color: ${COLORS.imperial_red};
  text-shadow: ${COLORS.ruby_red} 1px 1px;
  font-weight: bold;
  a{
    color: inherit;
  }
  a:hover{
    color: ${COLORS.ruby_red} !important;
  }
  a:visited{
    color: inherit;
  }
`;