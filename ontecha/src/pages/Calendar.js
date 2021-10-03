import React, {useState, useEffect} from 'react'
import './Calendar.css'

function Calendar() {

    const [nav, setNav] = useState(0);
    const [days, setDays] = useState([]);
    const [dateDisplay, setDateDisplay] = useState('');
    const [clicked, setClicked] = useState();
    const [events, setEvents] = useState(
        localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : []
    );



    const eventsForDate = date => events.find(e =>e.date===date);
    
    useEffect(() => {
        localStorage.setItem('events', JSON.stringify(events));
    }, [events]);

    return (
        <div className="calendar">
            <div className="container">
                <div className="header">
                    <div className="month-navigation">
                        <div><button className="back-button"> ← </button></div>
                        <div className="monthDisplay">January</div>
                        <div><button className="back-button"> → </button></div>
                    </div>
                 
                <div className="weekdays">
                    <div className="eachWeekday">SUNDAY</div>
                    <div className="eachWeekday">MONDAY</div>
                    <div className="eachWeekday">TUESDAY</div>
                    <div className="eachWeekday">WEDNESDAY</div>
                    <div className="eachWeekday">THURSDAY</div>
                    <div className="eachWeekday">FRIDAY</div>
                    <div className="eachWeekday">SATURDAY</div>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Calendar
