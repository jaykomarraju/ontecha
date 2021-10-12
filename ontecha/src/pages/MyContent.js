import React from 'react'
import './MyContent.css'
import FilesView from '../components/FilesView/FilesView'
import UploadFile from '../components/FilesView/UploadFile'
import AddFolderButton from '../components/FilesView/AddFolderButton'

function MyContent() {
    return (
        <div className="mycontent">
            <div className="heading">
                <h1 className="page-title">MY CONTENT</h1>
                <UploadFile />
                <AddFolderButton />
            </div>
            <div className='container'>
                <FilesView />
            </div>
        </div>
    )
}

export default MyContent
