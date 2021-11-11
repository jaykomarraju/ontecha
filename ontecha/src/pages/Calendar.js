import React, {useState, useEffect} from 'react'
import CalendarHeader from '../components/CalendarView/CalendarHeader';
import CreatePlanButton from '../components/CalendarView/CreatePlanButton';
import Day from '../components/CalendarView/Day';
import ViewBatchDaysButton from '../components/CalendarView/ViewBatchDaysButton';
import ViewCurrentPlansButton from '../components/CalendarView/ViewCurrentPlansButton';
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

    useEffect(() => {
        const weekdays=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        const dt = new Date();

        if(nav !== 0){
            dt.setMonth(new Date().getMonth() + nav);
        }

        const day = dt.getDate();
        const month = dt.getMonth();
        const year = dt.getFullYear();

        const firstDayOfMonth = new Date(year, month, 1);
        const daysInMonth = new Date(year, month +1, 0).getDate();

        const dateString = firstDayOfMonth.toLocaleDateString('en-us', {
            weekday: 'long',
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        });
        setDateDisplay(`${dt.toLocaleDateString('en-us', {month: 'long'})} ${year}`)
        const paddingDays = weekdays.indexOf(dateString.split(', ')[0]);

        const daysArr = [];

        for (let i = 1; i<=paddingDays + daysInMonth; i++){
            const dayString = `${month + 1}/${i-paddingDays}/${year}`;

            if(i>paddingDays){
                daysArr.push({
                    value: i - paddingDays,
                    event: eventsForDate(dayString),
                    isCurrentDay: i - paddingDays === day && nav  === 0,
                    date: dayString,
                });
            } else {
                daysArr.push({
                    value: 'padding',
                    event: null,
                    isCurrentDay: false,
                    date: '',
                });
            }

        }

        setDays(daysArr);


    }, [events, nav]);

    return (
        <div className="calendarPage">
            <div className="container">
                <CalendarHeader 
                    dateDisplay={dateDisplay}
                    onNext = {() => setNav(nav + 1)} 
                    onBack = {() => setNav(nav - 1)}    
                />
            </div>
            <div className='calendar'>
                {days.map((d, index) => (
                    <Day 
                        key={index}
                        day={d}
                        onClick={() => {
                            if(d.value !== 'padding') {
                                setClicked(d.date);
                            }
                        }}
                    />
                ))}
            </div>
            <div className='calendarFooter'>
                <CreatePlanButton />
                <ViewCurrentPlansButton />
                <ViewBatchDaysButton />
            </div>
        </div>
    )
}

export default Calendar
