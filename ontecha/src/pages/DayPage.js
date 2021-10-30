import React, {  useState } from 'react'
import {DndProvider} from 'react-dnd'
import {HTML5Backend} from 'react-dnd-html5-backend'
import DayExpandView from '../components/DayExpandView/DayExpandView'




const DayPage = () => {
    
        


        return (
            <DndProvider backend={HTML5Backend}>
                <div className="dayPage">
                    <h1>
                        WhatUP!~
                    </h1>

                    {/* <DayExpandView /> */}
                </div>
            </DndProvider>
        )
    
}

export default DayPage
