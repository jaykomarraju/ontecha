import React, { useState, useEffect } from 'react'
import { ContentList } from '../components/ContentDayView/ContentList';
import { CreativeBoard } from '../components/ContentDayView/CreativeBoard';
import { NoteList } from '../components/ContentDayView/NoteList';
import './ContentDay.css'

function ContentDay() {
    return (
        <div className='contentDay'>
            {/* 
                Here we need three components:
                    1. The "CREATIVE BOARD": This is the part where the user could drag and drop a note or content piece to.
                    2. The "NOTES": This is a list of all the notes (all notes are individually draggable)
                    3. The "CONTENT": This is a list of all the content uploaded to ONTECHA by the user (all content pieces are individually draggable)
            */}
            <div className="contentDayContainer">
                <div className="board creativeBoard">
                    <CreativeBoard />
                </div>
                <div className="board notesBoard">
                    <NoteList />
                </div>
                <div className="board contentBoard">
                    <ContentList />
                </div>
            </div>
        </div>
    )
}

export default ContentDay;