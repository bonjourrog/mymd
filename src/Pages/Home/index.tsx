import React, { useEffect, useState } from 'react';
import './Home.css';
import { HomeProps, MousePosition } from './Home.props';
import Header from './Components/Header';
import MarkdownBox from './Components/MarkdownBox';
import Markdown from 'react-markdown';
import gfm from "remark-gfm";
import Navbar from './Components/Navbar';

const Home:React.FC<HomeProps> = ()=>{

    const [mousePosition, setMousePosition] = useState<MousePosition>({X:10, Y:0});
    const [markdown, setMarkdown] = useState<string>("");

    const handleMousePosiotion = (event:MouseEvent)=>{
        setMousePosition({X:event.clientX, Y: event.clientY})
    }

    const downloadFile = ()=>{
        
    }

    useEffect(()=>{
        window.addEventListener('mousemove', handleMousePosiotion)
    }, []);

    return (
        <div className='home'>
            <Header markdown={markdown}/>
            <Navbar mousePosition={mousePosition}/>
            <main className='main'>
                <MarkdownBox className="box box--editor">
                    <textarea 
                        className='editor__input' id="editor"
                        onChange={(e)=>setMarkdown(e.target.value)}
                        value={markdown}
                        placeholder='Start writing ur ideas 🧑🏻‍💻✨!'
                    ></textarea>
                </MarkdownBox>
                <MarkdownBox className='box box--viewer'>
                    <Markdown rehypePlugins={[gfm]} children={markdown}></Markdown>
                </MarkdownBox>
            </main>
        </div>
    );
}

export default Home;
