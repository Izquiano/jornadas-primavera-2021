import React from "react";
import { NavLink } from "react-router-dom";
import "./NavMovSub.scss";

export default function NavMovSub({ handleClick, visible }) {
  const handleClick2 = () => {
    handleClick(!visible);
  };
  return (
    <>
      <div className='nav-mov-sub'>
        <div className='nav-mov-sub-sub'>
          <ul>
            <li>
              <NavLink
                exact
                to='/'
                activeClassName='active'
                onClick={handleClick2}
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                exact
                to='/programa#programa'
                activeClassName='active'
                onClick={handleClick2}
              >
                Programa
              </NavLink>
            </li>

            <li>
              <NavLink exact to='/item' onClick={handleClick2}>
                Item A
              </NavLink>
              <ul className='sub-menu'>
                <li>
                  <NavLink exact to='/item/item1' onClick={handleClick2}>
                    Item-A1
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to='/item/item2' onClick={handleClick2}>
                    Item-A2
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to='/item/item3' onClick={handleClick2}>
                    Item-A3
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink exact to='/item2' onClick={handleClick2}>
                Item B
              </NavLink>
              <ul className='sub-menu'>
                <li>
                  <NavLink exact to='/item/item21' onClick={handleClick2}>
                    Item-B1
                  </NavLink>
                </li>
                <li>
                  <NavLink exact to='/item/item22' onClick={handleClick2}>
                    Item-B2
                  </NavLink>
                </li>
              </ul>
            </li>
            <li>
              <NavLink exact to='/login' className='login'>
                Login
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
