import React from "react";

function Header() {
  return (
    <header className="header">
        <div className="d-flex align-items-center header__container ">
          <span className="flex-grow-1 header__logo"> User Management </span>
          <div className="header__btns d-flex">
            <button type="button" className="btn btn-warning">Login</button>
            <button type="button" className="btn btn-warning">Register</button>
          </div>
        </div>
        
    </header>
  );
}
export default Header;