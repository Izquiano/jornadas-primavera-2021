import React from "react";
import LogoSadeca from "../../images/logo-sadeca.png";
import "./Footer.scss";

export default function Footer() {
  return (
    <div className='footer'>
      <img src={LogoSadeca} alt='' />

      <p>© SADECA 2020</p>
    </div>
  );
}
