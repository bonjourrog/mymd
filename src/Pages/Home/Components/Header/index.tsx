import React, { useState } from 'react';
import './Header.css';
import { HeaderProps } from './Header.props';
import { IoCloudDownloadSharp } from "react-icons/io5";

const Header: React.FC<HeaderProps> = ()=>{
    const [noteTitle, setNoteTitle]= useState<string>("New file");
    return(
        <header className='header'>
            <input className='header__note-title' value={noteTitle} onChange={(e)=>setNoteTitle(e.target.value)} onFocus={(e)=>e.currentTarget.select()} type='text' placeholder='Ingrese el nombre del archivo ✍🏻🖊️✏️✨'/>

            <ul className='flex gap-8 items-center'>
                <li>
                    <IoCloudDownloadSharp className="header__download-btn" />
                </li>
            </ul>
        </header>
    );
}


export default Header;