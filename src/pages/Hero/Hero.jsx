import React from "react";
import Lema from "../../images/lema.png";
import LogoSadeca from "../../images/logo-sadeca.png";

import("./Hero.scss");

export default function Hero({ link }) {
  return (
    <div className='hero' id='hero'>
      <div className='circle'>
        <img src={LogoSadeca} alt='Logotipo SADECA' className='logo-sadeca' />
        <img src={Lema} alt='Una mirada analítica al periodo de la covid' />
      </div>
      <a href={link}>
        <div className='scroll-down'></div>
      </a>
    </div>
  );
}
