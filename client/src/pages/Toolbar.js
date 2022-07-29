import React from "react";
import { MdDeleteForever } from 'react-icons/md'
import { VscUnlock } from 'react-icons/vsc'

const Toolbar = () => {
    return (
        <div className="container-fluid d-flex justify-content-center gap-4 align-items-center mb-3">
            <div className="block__btn"><button className="btn btn-danger btn-lg">Block</button></div>
            <div style={{width: "50px", height: "50px"}}><VscUnlock className="w-100 h-100" /></div>
            <div style={{width: "50px", height: "50px"}}><MdDeleteForever className="w-100 h-100" /></div>
        </div>
    );
}

export default Toolbar