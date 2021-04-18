import React, {useState,useEffect} from 'react';
import "./style.css";

const Nav = (props) => {

    const [navbarOpen,setNavbarOpen] = useState(false);
    const handleToggle = () =>{
        setNavbarOpen(prev => !prev);
    }
    return (
        <div>
            <nav style={props.style}>
                <button className={`navigation_button`} onClick={handleToggle}>
                <div className={`hamburger ${navbarOpen ? "hamburger_open" : ""}`} />
                <div className={`hamburger ${navbarOpen ? "hamburger_open" : ""}`} />              
                <div className={`hamburger ${navbarOpen ? "hamburger_open" : ""}`} />                    
                    
                    </button>
                <ul className={`navigation navigation_list ${navbarOpen ? "showMenu" : ""}`}>
                    <a href={`#about`} className={`navigation_list-item`}>Home</a>
                    <a href={`#projects`} className={`navigation_list-item`}>Projects</a>
                    <a href={`#resume`}
                     className={`navigation_list-item`}>Resume</a>
                    <a href={`#contact`}
                    className={`navigation_list-item`}>Contact</a>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
