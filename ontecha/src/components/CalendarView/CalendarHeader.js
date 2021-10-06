import React from 'react'
import Calendar from '../../pages/Calendar'

export const CalendarHeader = ({onNext,onBack,dateDisplay}) => {

    
        return (
            <div className="header">
                    <div className="month-navigation">
                        <div><button className="back-button" onClick={onBack}> ← </button></div>
                        <div className="monthDisplay">{dateDisplay}</div>
                        <div><button className="back-button" onClick={onNext}> → </button></div>
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
        )
}

export default CalendarHeader;
