import React from 'react';

import Title from '../../components/Title/index';
import Alerts from '../../components/Alerts/index';
import SearchBox from '../../components/SeachBox/index';
import Footer from '../../components/Footer/index';

import { HomeStyles } from './styles';

function Home(props) {
  return (
    <HomeStyles>
      <Title isLink={false}/>
      <SearchBox/>
      <Alerts/>
      <Footer/>
    </HomeStyles>
  );
}

export default Home;