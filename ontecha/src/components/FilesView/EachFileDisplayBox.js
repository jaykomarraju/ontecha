/*
    data entry of each file:
        - file name
        - file size
        - file thumbnail
        - content day
        - tags
*/

import React, { Component } from 'react'
import './EachFileDisplayBox.css'
import { FileData } from './FilesData'

export const EachFileDisplayBox = () => {

        var title = FileData[0].title;
        var content_day = FileData[0].content_day;
        var file_size = FileData[0].file_size;
        var tags = FileData[0].tags;
    
        return (
            <div className="display-box">
                <div className="file-display-heading">
                    <div className="file-display-title">{title}</div>
                    <div className="file-display-tags">{tags}</div>
                </div>
                <div className="file-display-thumbnail">
                    <img></img>
                </div>
                <div className='file-display-footer'>
                    <div>CONTENT DAY: {content_day}</div>
                    <div>{file_size}</div>
                </div>
            </div>
        )
    
}

export default EachFileDisplayBox
