import React from 'react'
import './MyContent.css'
import FilesView from '../components/FilesView/FilesView'
import UploadFile from '../components/FilesView/UploadFile'

function MyContent() {
    return (
        <div className="mycontent">
            <div className="heading">
                <h1 className="page-title">MY CONTENT</h1>
                <UploadFile />
            </div>
            <div className='container'>
                <FilesView />
            </div>
        </div>
    )
}

export default MyContent
