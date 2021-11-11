import React from 'react'
import './MyContent.css'
import FilesView from '../components/FilesView/FilesView'

function MyContent() {
    return (
        <div className="mycontent">
            <div className="heading">
                <h1 className="page-title">MY CONTENT</h1>
                <button className="button-white">UPLOAD +</button>
            </div>

            <div className='container'>
                <FilesView />
                <FilesView />
            </div>
        </div>
    )
}

export default MyContent
