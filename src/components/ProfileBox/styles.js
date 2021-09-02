import styled from 'styled-components';

import { COLORS } from '../../globalStyles';

export const ProfileBoxStyles = styled.div`
  .ProfilePanel{
    position: sticky;
    top: 0;
    border-color: ${COLORS.celadon_blue};
    background-color: ${COLORS.powder_blue};

    image{
      max-width: 50%;
    }

    button{
      color: ${COLORS.honeydew};
      background-color: ${COLORS.celtic_blue};
      border-color: ${COLORS.celadon_blue};
    }
    button:hover{
      color: ${COLORS.honeydew};
      background-color: ${COLORS.prussian_blue};
      border-color: ${COLORS.celadon_blue};
    }
  }
`;