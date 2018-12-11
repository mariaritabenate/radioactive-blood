import React from "react";
import "./navbar.css"
import linkedinBox from '../icons/linkedin-box.svg';
import instagramBox from '../icons/instagram.svg';
import pinterestBox from '../icons/pinterest.svg';
import searchBox from '../icons/magnify.svg'


class Navbar extends React.Component{
    render(){
        return (<div className="navbar">  
                    <div className="navigation">
                        <button className="button"> HOME </button>
                        <button className="button"> HOME </button>
                        <button className="button"> HOME </button>
                        <button className="button"> HOME </button>
                        <button className="button"> HOME </button>
                        <button className="button"> HOME </button>
                    </div>
                    <div className="social-media">
                        <button className="button"> <img src={linkedinBox}/></button>
                        <button className="button"> <img src={instagramBox}/> </button>
                        <button className="button"> <img src={pinterestBox}/> </button>
                    </div>
                    <div className="search">
                    <button className="button"> <img src={searchBox}/> </button>
                    </div>

                </div>
                 );
    }
}

export default Navbar;


