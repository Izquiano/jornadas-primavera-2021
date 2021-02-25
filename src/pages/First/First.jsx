import React from "react";
import Button from "../../components/Button/Button";
import Card from "../../components/Card/Card";

import("./First.scss");

export default function First() {
  return (
    <>
      <div id='first' className='first'>
        <h1>Home</h1>

        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          aperiam nostrum deserunt, tempora quasi facilis vitae iure libero
          maxime pariatur labore quos, earum molestias repellendus nihil eaque
          laudantium. Dolorum, rerum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          aperiam nostrum deserunt, tempora quasi facilis vitae iure libero
          maxime pariatur labore quos, earum molestias repellendus nihil eaque
          laudantium. Dolorum, rerum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          aperiam nostrum deserunt, tempora quasi facilis vitae iure libero
          maxime pariatur labore quos, earum molestias repellendus nihil eaque
          laudantium. Dolorum, rerum?
        </p>
        <h2>Buttons</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          aperiam nostrum deserunt, tempora quasi facilis vitae iure libero
          maxime pariatur labore quos, earum molestias repellendus nihil eaque
          laudantium. Dolorum, rerum?
        </p>
        <Button className={"primary"} text={"primary"} />
        <Button className={"secondary"} text={"secondary"} />
        <Button className={"alert"} text={"alert"} />
        <h1>Title h1</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          aperiam nostrum deserunt, tempora quasi facilis vitae iure libero
          maxime pariatur labore quos, earum molestias repellendus nihil eaque
          laudantium. Dolorum, rerum?
        </p>
        <h2>Title h2</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          aperiam nostrum deserunt, tempora quasi facilis vitae iure libero
          maxime pariatur labore quos, earum molestias repellendus nihil eaque
          laudantium. Dolorum, rerum?
        </p>
        <h3>Title h3</h3>
        <p>
          <b>Lorem ipsum dolor</b> Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Repellat aperiam nostrum deserunt, tempora quasi
          facilis vitae iure libero maxime pariatur labore quos, earum molestias
          repellendus nihil eaque laudantium. Dolorum, rerum?
        </p>
        <ul>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
        </ul>
        <p>
          <i>Lorem ipsum dolor sit amet</i> Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Repellat aperiam nostrum deserunt,
          tempora quasi facilis vitae iure libero maxime pariatur labore quos,
          earum molestias repellendus nihil eaque laudantium. Dolorum, rerum?
        </p>
        <ol>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
          <li>Lorem ipsum dolor sit amet</li>
        </ol>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          aperiam nostrum deserunt, tempora quasi facilis vitae iure libero
          maxime pariatur labore quos, earum molestias repellendus nihil eaque
          laudantium. Dolorum, rerum?
        </p>
        <Card />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          aperiam nostrum deserunt, tempora quasi facilis vitae iure libero
          maxime pariatur labore quos, earum molestias repellendus nihil eaque
          laudantium. Dolorum, rerum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          aperiam nostrum deserunt, tempora quasi facilis vitae iure libero
          maxime pariatur labore quos, earum molestias repellendus nihil eaque
          laudantium. Dolorum, rerum?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
          aperiam nostrum deserunt, tempora quasi facilis vitae iure libero
          maxime pariatur labore quos, earum molestias repellendus nihil eaque
          laudantium. Dolorum, rerum?
        </p>
      </div>
    </>
  );
}
