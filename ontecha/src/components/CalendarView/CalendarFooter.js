import React from 'react'
import { FooterButton } from './FooterButton'
import NewUploadCycleButton from './NewUploadCycleButton'
import ViewBatchDaysButton from './ViewBatchDaysButton'
import ViewCurrentCyclesButton from './ViewCurrentCyclesButton'
import './CalendarFooter.css'

export const CalendarFooter = () => {
    return(
        <div className="bottom-buttons">
            <NewUploadCycleButton />
            <ViewCurrentCyclesButton />
            <ViewBatchDaysButton />
        </div>
    )
}

export default CalendarFooter
