import react from 'react'
import FilesView from '../FilesView/FilesView'

export const ContentList = () => {
    return(
        <div>
            <p className='boardHeading'>CONTENT</p>
            <div className="file">
                <p className='content-title'>
                    Test Content 1
                </p>
                <div className='thumbnail-white'>
                    
                </div>
            </div>

            <div className="file">
                <p className='content-title'>
                    Test Content 2
                </p>
                <div className='thumbnail-white'>
                    
                </div>
            </div>

            <div className="file">
                <p className='content-title'>
                    Test Content 3
                </p>
                <div className='thumbnail-white'>
                    
                </div>
            </div>


            <div className="file">
                <p className='content-title'>
                    Test Content 4
                </p>
                <div className='thumbnail-white'>
                    
                </div>
            </div>
        </div>
    )
}