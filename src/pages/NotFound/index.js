import React from 'react';

import NotFoundBox from '../../components/NotFoundBox/index';
import HomeButton from '../../components/HomeButton/index';
import Footer from '../../components/Footer/index';

import { NotFoundStyle } from './styles';

function NotFound(props) {
  return (
    <div>
      <NotFoundStyle>
        <NotFoundBox/>
        <HomeButton/>
        <Footer/>
      </NotFoundStyle>
    </div>
  );
}

export default NotFound;