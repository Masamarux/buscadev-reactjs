import React from 'react';

import Title from '../components/Title';
import Alerts from '../components/Alerts';
import SearchBox from '../components/SearchBox';
import Footer from '../components/Footer';

function Home(props) {
  return (
    <div>
      <Title/>
      <SearchBox/>
      <Alerts/>
      <Footer/>
    </div>
  );
}

export default Home;