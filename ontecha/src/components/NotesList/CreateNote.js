import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './CreateNote.css'
import {MdDeleteForever} from 'react-icons/md'
import {BiCalendarCheck} from 'react-icons/bi'
import Modal from '@material-ui/core/Modal';

function getModalStyle() {
    return {
        top: `50%`,
        left: `50%`,
        transform: `translate(-50%, -50%)`,
    }
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: '60%',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        borderRadius:'20px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3)
    },
}));

export const CreateNote = () => {

    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);
    
    const handleOpen = () => {
        setOpen(true);
    }
    
    const handleClose = () => {
        setOpen(false);
    }
        return (
        //     <div className="note new">
            
        //     <div className="note-header">
        //         <div className="note-title">CAPTURE YOUR IDEA</div>
        //         <div className="note-tags">
        //             {/* <span> </span>
        //             <span> </span>
        //             <span> </span> */}
        //             <textarea className="tag-text-box" rows="1" placeholder="Enter relevant tags"></textarea>
        //         </div>
        //     </div>
        //     <div className="new-note-title-text">
        //         <textarea className="new-note-title" rows="1" placeholder="Title"></textarea>
        //     </div>
        //     <div className="note-text">
        //         <textarea className="note-textbox" rows="5" placeholder="Enter your new idea here..."></textarea>
        //     </div>
        //     <div className="note-footer">
        //         <div className="label-content-day">
        //             <span>CONTENT DAY</span>
        //             <span>
        //             <BiCalendarCheck className='delete-icon' size="1.3em" />
        //             </span>
        //         </div>
        //         <button className="button">Create idea</button>
        //     </div>
        // </div>
        <div className="note new">
            <div className="create-note">
                <div className="note-title">CAPTURE YOUR IDEA</div>
                <div><button className="create-button" onClick={handleOpen}>CREATE +</button></div>
            </div>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby = "simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    
                <div className="note-header">
                 <div className="note-title">CAPTURE YOUR IDEA</div>
                 <div className="note-tags">
                     {/* <span> </span>
                    <span> </span>
                     <span> </span> */}
                     <textarea className="tag-text-box" rows="1" placeholder="Enter relevant tags"></textarea>
                 </div>
             </div>
             <div className="new-note-title-text">
                 <textarea className="new-note-title" rows="1" placeholder="Title"></textarea>
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
                 <button className="button" onClick={handleClose}>Create idea</button>
             </div>

                </div></Modal>
            
        </div>
        )
    
}

export default CreateNote
