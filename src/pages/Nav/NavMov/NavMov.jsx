import React, { useState } from "react";
import "./NavMov.scss";
import NavMovSub from "./NavMovSub";

export default function NavMov() {
  const [visible, setVisible] = useState(false);
  const body = document.body;

  const handleClick = (e) => {
    if (!visible) {
      body.style.height = "100vh";
      body.style.overflowY = "hidden";
      body.style.position = "fixed";
    } else {
      body.style.height = "100%";
      body.style.overflowY = "visible";
      body.style.position = "relative";
    }
    setVisible(!visible);
  };

  return (
    <>
      <div className='nav-mov' id='nav-mov' onClick={handleClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>
      {visible && <NavMovSub handleClick={handleClick} visible={visible} />}
    </>
  );
}
