import { createGlobalStyle } from 'styled-components';

import MontserratRegularWoff from './assets/fonts/Montserrat/Montserrat-Regular.woff';
import MontserratRegularWoff2 from './assets/fonts/Montserrat/Montserrat-Regular.woff2';
import MontserratRegularTtf from './assets/fonts/Montserrat/Montserrat-Regular.ttf';

import DancingScriptRegularWoff from './assets/fonts/DancingScript/DancingScript-Regular.woff';
import DancingScriptRegularWoff2 from './assets/fonts/DancingScript/DancingScript-Regular.woff2';
import DancingScriptRegularTtf from './assets/fonts/DancingScript/DancingScript-Regular.ttf';

import ZCOOLKuaiLeRegularWoff from './assets/fonts/ZCOOLKuaiLe/ZCOOLKuaiLe-Regular.woff';
import ZCOOLKuaiLeRegularWoff2 from './assets/fonts/ZCOOLKuaiLe/ZCOOLKuaiLe-Regular.woff2';
import ZCOOLKuaiLeRegularTtf from './assets/fonts/ZCOOLKuaiLe/ZCOOLKuaiLe-Regular.ttf';



export const COLORS = {
  ruby_red: '#a31420',//title hover
  imperial_red: '#e63946',//title
  honeydew: '#f1faee', //background
  powder_blue: '#E2F2F3',//borders
  celadon_blue: '#457b9d',//borders
  celtic_blue: '#3d70b8',//borders
  indigo_dye: '#23416c',//link
  prussian_blue: '#1d3557',//text
  oxford_blue: '#14253d',//link hover
}

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Montserrat';
    src:  url(${MontserratRegularWoff2}) format('woff2'),
          url(${MontserratRegularWoff}) format('woff'),
          url(${MontserratRegularTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'Dancing Script';
    src:  url(${DancingScriptRegularWoff2}) format('woff2'),
          url(${DancingScriptRegularWoff}) format('woff'),
          url(${DancingScriptRegularTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }
  @font-face {
    font-family: 'ZCOOL KuaiLe';
    src:  url(${ZCOOLKuaiLeRegularWoff2}) format('woff2'),
          url(${ZCOOLKuaiLeRegularWoff}) format('woff'),
          url(${ZCOOLKuaiLeRegularTtf}) format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: swap;
  }

  *{
    padding: 0;
    margin: 0;
  }

  html body{
    position: relative;
    min-height: 100%;
    font-family: 'Montserrat', sans-serif;
    font-size: 14px;
    color: ${COLORS.prussian_blue};
    background-color: ${COLORS.honeydew};
  }
`; 