import React from 'react'
import {Link} from 'react-router-dom';

export const Day = ({day, onClick}) => {
        const className = `day ${day.value === 'padding' ? 'padding' : ''} ${day.isCurrentDay ? 'currentDay' : ''}`
        return (
            <div onClick={onClick} className={className}>
                <Link to="/dayPage">
                {day.value === 'padding' ? '' : day.value}

                {day.event && <div className='event'>{day}</div>}
                </Link>
            </div>
        );
    
};

export default Day
