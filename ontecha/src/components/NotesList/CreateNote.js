import React, { Component } from 'react'
import './CreateNote.css'
import {MdDeleteForever} from 'react-icons/md'
import {BiCalendarCheck} from 'react-icons/bi'

export class CreateNote extends Component {
    render() {
        return (
            <div className="note new">
            
            <div className="note-header">
                <div className="note-title">Create a new idea.</div>
                <div className="note-tags">
                    {/* <span> </span>
                    <span> </span>
                    <span> </span> */}
                    <textarea className="tag-text-box" rows="1" placeholder="Enter relevant tags"></textarea>
                </div>
            </div>
            <div className="note-text">
                <textarea className="note-textbox" rows="5" placeholder="Enter your new idea here..."></textarea>
            </div>
            <div className="note-footer">
                <div className="label-content-day">
                    <span>CONTENT DAY</span>
                    <span>
                    <BiCalendarCheck className='delete-icon' size="1.3em" />
                    </span>
                </div>
                <button className="button">Create idea</button>
            </div>
        </div>
        )
    }
}

export default CreateNote
