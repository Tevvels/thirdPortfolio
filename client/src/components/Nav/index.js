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
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                </ul>
            </nav>
        </div>
    )
}

export default Nav
