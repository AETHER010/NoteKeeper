import React from 'react';
import './Header.css';
import { MdStickyNote2 } from "react-icons/md";

function Header(){
    return(
        <div className="header">
            <div className='contain'>
            <MdStickyNote2 style={{height:'40px', width:'40px', margin:'8px', padding:'14px'}} />
            <h1>Note Keeper</h1>
            </div>
        </div>
    );
}
export default Header;