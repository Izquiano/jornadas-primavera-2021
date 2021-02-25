import React from "react";
import { NavLink } from "react-router-dom";

import("./NavDes.scss");

export default function NavDes() {
  return (
    <div className='nav'>
      <div className='logo'>
        <NavLink to='/' className='text'>
          {/* <img src={Jornadas} alt='' /> */}
          <h1>
            XVIII <span>JORNADAS DE PRIMAVERA</span>{" "}
          </h1>
          <span>HOTEL PARADOR ATLANTICO · CÁDIZ</span>
        </NavLink>
      </div>
      <div className='nav-nav'>
        <ul>
          <li>
            <NavLink exact to='/' activeClassName='active'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink exact to='/programa' activeClassName='active'>
              Programa
            </NavLink>
          </li>

          <li>
            <NavLink exact to='/item'>
              Item A
            </NavLink>
            <ul className='sub-menu'>
              <li>
                <NavLink exact to='/item/item1'>
                  Item-A1
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/item/item2'>
                  Item-A2
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/item/item3'>
                  Item-A3
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink exact to='/item2'>
              Item B
            </NavLink>
            <ul className='sub-menu'>
              <li>
                <NavLink exact to='/item/item21'>
                  Item-B1
                </NavLink>
              </li>
              <li>
                <NavLink exact to='/item/item22'>
                  Item-B2
                </NavLink>
              </li>
            </ul>
          </li>
          <li>
            <NavLink exact to='/#login' className='login'>
              Login
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}
