import React, { CSSProperties, useEffect, useRef, useState } from 'react';
import './Home.css';
import { HomeProps, MousePosition } from './Home.props';
import Header from './Components/Header';
import MarkdownBox from './Components/MarkdownBox';
import Markdown from 'react-markdown';
import gfm from "remark-gfm";
import Navbar from './Components/Navbar';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark, xonokai, vs, a11yDark, twilight, tomorrow } from 'react-syntax-highlighter/dist/esm/styles/prism';  



const Home:React.FC<HomeProps> = ()=>{

    const [mousePosition, setMousePosition] = useState<MousePosition>({X:10, Y:0});
    const [markdown, setMarkdown] = useState<string>("");

    const handleMousePosiotion = (event:MouseEvent)=>{
        setMousePosition({X:event.clientX, Y: event.clientY})
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
                    <Markdown rehypePlugins={[gfm]} children={markdown} components={{
                        code: ({ className, children, ...props }) => {
                            const match = /language-(\w+)/.exec(className || '');
                            return match ? (
                                <SyntaxHighlighter
                                    style={tomorrow }
                                    language={match[1]}
                                    PreTag="div"
                                    children={String(children).replace(/\n$/, '')}
                                    //   {...props, {style={dark}}}
                                />
                            ) : (
                                <code className={className} {...props}>
                                    {children}
                                </code>
                            );
                            },
                        }}
                    />
                </MarkdownBox>
            </main>
        </div>
    );
}

export default Home;
