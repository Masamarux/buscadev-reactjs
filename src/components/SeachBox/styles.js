import styled from 'styled-components';

import { COLORS } from '../../globalStyles';

export const SearchBoxStyle = styled.div`
  .InputGroup{
    input {
      text-align: center;
      border-color: ${COLORS.celtic_blue} !important;
      color: ${COLORS.prussian_blue};
      ::placeholder {
        color: ${COLORS.prussian_blue};
      }
      :-ms-input-placeholder {
        color: ${COLORS.prussian_blue};
      }

      ::-ms-input-placeholder { /* Microsoft Edge */
        color: ${COLORS.prussian_blue};
      }
    }
    
    button{
      color: ${COLORS.celtic_blue} !important;
      border-color: ${COLORS.celtic_blue} !important;
      background-color: ${COLORS.honeydew} !important;
    }
    button:hover {
      color: ${COLORS.prussian_blue} !important;
      border-color: ${COLORS.prussian_blue} !important;
      background-color: ${COLORS.powder_blue} !important;
    }
    
  }
`;