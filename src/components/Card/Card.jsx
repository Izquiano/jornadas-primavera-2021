import React from "react";
import "./Card.scss";
import Image from "../../images/image.png";
export default function Card() {
  return (
    <div className='card'>
      <img src={Image} alt='' />
      <h2>Card Title</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        aperiam nostrum deserunt
      </p>
    </div>
  );
}
