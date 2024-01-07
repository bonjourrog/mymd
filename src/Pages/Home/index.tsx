import React from 'react';
import './Home.css';
import { HomeProps } from './Home.props';

const Home:React.FC<HomeProps> = ()=>{
    return (
        <p className='text-bold text-blue-400 text-2xl'>Home works!</p>
    );
}

export default Home;
