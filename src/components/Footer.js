import React from 'react';
import { Link } from 'react-router-dom';

import { FaHeart } from 'react-icons/fa';
import { IoCafe } from "react-icons/io5";

function Footer(props) {
  return (
    <div>
      <p>Feito com <FaHeart/>&<IoCafe/> por <Link to={{pathname: 'https://github.com/Masamarux'}} target='_blank'>Masa</Link></p>
    </div>
  );
}

export default Footer;