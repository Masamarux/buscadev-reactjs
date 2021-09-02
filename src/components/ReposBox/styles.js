import styled from 'styled-components';

import { COLORS } from '../../globalStyles';

export const ReposBoxStyles = styled.div`
  .ControllerCard{
    border-color: ${COLORS.celadon_blue};
    background-color: ${COLORS.powder_blue};
    select{
      color: ${COLORS.prussian_blue} !important;
      border-color: ${COLORS.celtic_blue} !important;
      background-color: ${COLORS.honeydew};
      .Selection{
        color: ${COLORS.prussian_blue} !important;
      }
    }
  }
  .Card{
    margin: 10px 0 10px 0;
    border-color: ${COLORS.celadon_blue};
    background-color: ${COLORS.powder_blue};

    .CardHeader{
      text-align: left;
    }
    .BadgeRepoStars{
      background-color: ${COLORS.celtic_blue} !important;
      margin-bottom: 1px;
    }
    .RepoText{
      color: ${COLORS.indigo_dye};
    }
    .RepoText:hover{
      color: ${COLORS.oxford_blue};
    }
  }
`;