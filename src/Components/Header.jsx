import React from 'react';
import {Link} from "react-router-dom";

export default function Home() {
    return (
    <div className='app-header'>
        <Link className='app-link' to="/home">Home</Link>
        <Link className='app-link' to="/about">About Us</Link> 
        <Link className='app-link' to="/contact">Contact Us</Link> 
    </div>
    );
}