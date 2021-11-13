import react from 'react'

export const NoteList = () => {
    return(
        <div className="contentDayNotes">
            <p className='boardHeading'>NOTES</p>
            <div className='note-2'>
            <div className="note-title">Test Title 1</div>
                <div className="note-tags-2">
                    <span>YouTube</span>
                    <span>Story</span>
                </div>
            </div>
            <div className='note-2'>
            <div className="note-title">Test Title 2</div>
                <div className="note-tags-2">
                    <span>Tiktok</span>
                    <span>Sketch</span>
                </div>
            </div>
            <div className='note-2'>
            <div className="note-title">Test Title 3</div>
                <div className="note-tags-2">
                    <span>YouTube</span>
                    <span>Music Video</span>
                </div>
            </div>
        </div>
    )
}