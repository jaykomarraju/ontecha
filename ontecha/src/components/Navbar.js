import React, {useState} from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GrIcons from 'react-icons/gr';
import {Link} from 'react-router-dom';
import {SidebarData} from './SidebarData'
import './Navbar.css'
import { IconContext } from 'react-icons'

function Navbar() {

    const [sidebar,setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
        <>
            <IconContext.Provider value={{color: '#fff'}}>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                
                <ul className="nav-menu-items">
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.className}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Navbar
