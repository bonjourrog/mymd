import React, { useState } from 'react';
import './Header.css';
import { HeaderProps } from './Header.props';
import { TbFileImport } from "react-icons/tb";
import {  HiSearch  } from "react-icons/hi";
import { MdOutlineFileDownload, MdOutlineMail, MdOutlineLiveHelp, MdOutlineInsertDriveFile    } from "react-icons/md";

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
            <span className='logo relative flex'>MYMDOWN <small className='absolute xs -top-2 -right-8'>✨</small></span>
            <input className='header__note-title' value={noteTitle} onChange={(e)=>setNoteTitle(e.target.value)} onFocus={(e)=>e.currentTarget.select()} type='text' placeholder='Ingrese el nombre del archivo ✍🏻🖊️✏️✨'/>

            <ul className='header__list'>
                <li className="header__list-item header__list-item--disable"><HiSearch/></li>
                <li className="header__list-item header__list-item--disable"><TbFileImport/></li>
                <li className="header__list-item header__list-item--disable"><MdOutlineInsertDriveFile /></li>
                <li className="header__list-item header__list-item--disable"><MdOutlineMail /></li>
                <li className="header__list-item"><MdOutlineFileDownload onClick={downloadFile} className="header__download-btn" /></li>
                <li className="header__list-item header__list-item--disable"><MdOutlineLiveHelp /></li>
                {/* <li className='flex gap-4'>
                    <div className='flex flex-col'>
                        <p className='text-sm tracking-wider not-italic text-zinc-200'>Rogelio Beltran</p>
                        <small className='italic tracking-wider'>@bnjr-og</small>
                    </div>
                    <span className='flex items-center justify-center text-xs font-semibold w-8 h-8 rounded-full  bg-[url("https://avatars.githubusercontent.com/u/64503406?v=4")] bg-contain cursor-pointer'></span>
                </li> */}
            </ul>
        </header>
    );
}


export default Header;