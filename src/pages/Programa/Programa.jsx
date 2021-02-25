import React, { useEffect } from "react";
import Button from "../../components/Button/Button";
import("./Programa.scss");

export default function Programa() {
  useEffect(() => {
    const anchor = document.querySelector("#programa");
    anchor.scrollIntoView({ behavior: "smooth" });
  }, []);

  return (
    <div id='programa' className='programa'>
      <h1>Programa</h1>
      <p>Página para el programa</p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        aperiam nostrum deserunt, tempora quasi facilis vitae iure libero maxime
        pariatur labore quos, earum molestias repellendus nihil eaque
        laudantium. Dolorum, rerum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        aperiam nostrum deserunt, tempora quasi facilis vitae iure libero maxime
        pariatur labore quos, earum molestias repellendus nihil eaque
        laudantium. Dolorum, rerum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        aperiam nostrum deserunt, tempora quasi facilis vitae iure libero maxime
        pariatur labore quos, earum molestias repellendus nihil eaque
        laudantium. Dolorum, rerum?
      </p>
      <Button className={"primary"} text={"primary"} />
      <Button className={"secondary"} text={"secondary"} />
      <Button className={"alert"} text={"alert"} />
      <h2>Title</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        aperiam nostrum deserunt, tempora quasi facilis vitae iure libero maxime
        pariatur labore quos, earum molestias repellendus nihil eaque
        laudantium. Dolorum, rerum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        aperiam nostrum deserunt, tempora quasi facilis vitae iure libero maxime
        pariatur labore quos, earum molestias repellendus nihil eaque
        laudantium. Dolorum, rerum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        aperiam nostrum deserunt, tempora quasi facilis vitae iure libero maxime
        pariatur labore quos, earum molestias repellendus nihil eaque
        laudantium. Dolorum, rerum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        aperiam nostrum deserunt, tempora quasi facilis vitae iure libero maxime
        pariatur labore quos, earum molestias repellendus nihil eaque
        laudantium. Dolorum, rerum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        aperiam nostrum deserunt, tempora quasi facilis vitae iure libero maxime
        pariatur labore quos, earum molestias repellendus nihil eaque
        laudantium. Dolorum, rerum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        aperiam nostrum deserunt, tempora quasi facilis vitae iure libero maxime
        pariatur labore quos, earum molestias repellendus nihil eaque
        laudantium. Dolorum, rerum?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
        aperiam nostrum deserunt, tempora quasi facilis vitae iure libero maxime
        pariatur labore quos, earum molestias repellendus nihil eaque
        laudantium. Dolorum, rerum?
      </p>
    </div>
  );
}
