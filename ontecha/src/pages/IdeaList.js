import React, { useState } from 'react'
import NotesList from '../components/NotesList/NotesList'
import './IdeaList.css'
import {nanoid} from 'nanoid';
import CreateNote from '../components/NotesList/CreateNote';

function IdeaList() {

    const [notes, setNotes] = useState([
        {
        id: nanoid(),
        title: "Title 1",
        tags: ["Youtube", "Story"],
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        contentDay: "05/10/2021"
    },
    {
        id: nanoid(),
        title: "Title 2",
        tags: ["Tiktok", "Theme"],
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        contentDay: "07/12/2021"
    },
    {
        id: nanoid(),
        title: "Title 3",
        tags: ["Random", "Lyric"],
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        contentDay: "12/02/2022"
    },
    {
        id: nanoid(),
        title: "Title 4",
        tags: ["Random", "Timepass Test Case Shit"],
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
        contentDay: "04/08/2022"
    }
    ]);

    return (
        <div className="idealist">
            <div className="page-title">NOTES</div>
            <div className="container">
                <div className="firstCreate"><CreateNote /></div>
                
                <NotesList notes={notes}/>
            </div>
            
        </div>
    )
}

export default IdeaList
