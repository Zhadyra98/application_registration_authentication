import React from "react";
import { ReactComponent as Logo } from "../img/logo.svg"

function Header() {
  return (
    <header className="bg-success mb-5">
        <div className="container-lg d-flex align-items-center p-2">
          <div className="fs-2 flex-grow-1 d-flex gap-3 align-items-center">
            <Logo/>
            <h5 className="h5 text-white d-none d-sm-inline-block">User Management</h5>
          </div>
          <div className="gap-2 d-flex">
            <button type="button" className="btn btn-outline-light rounded-pill px-4">Login</button>
            <button type="button" className="btn text-success btn-light rounded-pill px-4">Register</button>
          </div>
        </div>
        
    </header>
  );
}
export default Header;