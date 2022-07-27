import React from "react";
import { ReactComponent as Logo } from "../img/logo.svg"

function Header() {
  return (
    <header className="header">
        <div className="d-flex align-items-center header__container ">
          <div className="logo fs-2 flex-grow-1 ">
            <Logo/>
            <span className="header__logo__text"> User Management</span>
          </div>
          <div className="header__btns d-flex">
            <button type="button" className="btn">Login</button>
            <button type="button" className="btn">Register</button>
          </div>
        </div>
        
    </header>
  );
}
export default Header;