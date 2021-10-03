import React, { Component } from 'react'
import CreateNote from './CreateNote'
import Note from './Note'
import './NotesList.css'

const NotesList = ({notes}) =>{
    
        return (
            <div className="notes-list">
                <div>
                {notes.map((note) => (
                    <Note id={note.id} title={note.title} tags={note.tags} text={note.text} contentDay={note.contentDay} />
                ))}
                </div>
            </div>
        )
    }


export default NotesList
