import React from 'react'
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as GrIcons from 'react-icons/gr';
import * as BiIcons from 'react-icons/bi';
import * as IoIcons from 'react-icons/io';
import * as IoIcons5 from 'react-icons/io5';

export const SidebarData = [
    
    {
        title: 'NOTES',
        path: '/idealist',
        icon: <AiIcons.AiOutlineBulb />,
        className: 'nav-text'
    },
    {
        title: 'CALENDAR',
        path: '/',
        icon: <IoIcons5.IoGridOutline />,
        className: 'nav-text'
    },
    {
        title: 'MY CONTENT',
        path: '/mycontent',
        icon: <AiIcons.AiOutlineFile />,
        className: 'nav-text'
    },
    {
        title: 'DEV',
        path: '/dev',
        icon: <AiIcons.AiOutlineFile />,
        className: 'nav-text'
    }
]