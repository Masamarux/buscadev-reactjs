import React from 'react';
import { Link } from 'react-router-dom';

import { FaHeart } from 'react-icons/fa';
import { IoCafe } from "react-icons/io5";

import { FooterStyle } from './styles';

function Footer(props) {
  return (
    <div>
      <FooterStyle>
        <footer>
          <p>Feito com <FaHeart/>&<IoCafe/> por <Link to={{pathname: 'https://github.com/Masamarux'}} target='_blank' rel='noopener noreferrer'>Masa</Link></p>
        </footer>
      </FooterStyle>
    </div>
  );
}

export default Footer;