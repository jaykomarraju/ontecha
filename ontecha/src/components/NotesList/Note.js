import React, { Component } from 'react'
import {MdDeleteForever} from 'react-icons/md'
import './Note.css'

const Note = ({id, title, tags,text,contentDay}) =>{
    return (
        <div className="note">
            
            <div className="note-header">
                <div className="note-title">{title}</div>
                <div className="note-tags">
                    <span>{tags[0]}</span>
                    <span>{tags[1]}</span>
                </div>
            </div>
            <div className="note-text">
                <span>
                {text} 

                </span>
            </div>
            <div className="note-footer">
                <div className="label-content-day">
                    <span>CONTENT DAY</span>
                    <span>{contentDay}</span>
                </div>
                <MdDeleteForever className='delete-icon' size="1.3em" />
            </div>
        </div>
    )
}


export default Note
