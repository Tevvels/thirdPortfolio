import React from 'react';
import "./style.css";

const Nav = (props) => {
    return (
        <div>
            <nav className={`navigation ${props.className}`}>the navigation</nav>
        </div>
    )
}

export default Nav
