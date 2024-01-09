import React, { useState } from 'react';
import './Header.css';
import { HeaderProps } from './Header.props';
import { IoCloudDownloadSharp } from "react-icons/io5";

const Header: React.FC<HeaderProps> = ({markdown})=>{
    const [noteTitle, setNoteTitle]= useState<string>("New file");

    const downloadFile = ()=>{
        
        const blob = new Blob([markdown?markdown:"### This file was created by mymd ✨🙌🏻😊"], {type:'text/markdown'});

        const link = document.createElement('a');

        link.href = window.URL.createObjectURL(blob);
        console.log(link.href);
        
        
        link.style.display= 'none';

        link.download = noteTitle ? `${noteTitle}.md` : 'New file.md';

        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
    }
    return(
        <header className='header'>
            <input className='header__note-title' value={noteTitle} onChange={(e)=>setNoteTitle(e.target.value)} onFocus={(e)=>e.currentTarget.select()} type='text' placeholder='Ingrese el nombre del archivo ✍🏻🖊️✏️✨'/>

            <ul className='flex gap-8 items-center'>
                <li>
                    <IoCloudDownloadSharp onClick={downloadFile} className="header__download-btn" />
                </li>
            </ul>
        </header>
    );
}


export default Header;