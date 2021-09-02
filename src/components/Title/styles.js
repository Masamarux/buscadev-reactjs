import styled from 'styled-components';

import { COLORS } from '../../globalStyles';

export const TitleStyles = styled.div`

  .Title{
    color: ${COLORS.imperial_red};
    text-shadow: ${COLORS.prussian_blue} 2px 2px;
    font-size: calc(40px + 1.3vw);
    font-family: 'Dancing Script', cursive;
  }

  a{
    text-decoration: none;
  }
`;