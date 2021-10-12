import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import {Form, ModalBody, ModalFooter} from 'react-bootstrap'
import { Button } from '@material-ui/core';
import {db} from '../../firebase';
import 'firebase/firestore';
import {doc, updateDoc} from 'firebase/firestore';

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
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        borderRadius:'20px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(4,4,4,4),
    },
}));


export default function AddFolderButton() {

    const [open,setOpen] = useState(false)
    const [name,setName] = useState("")
    const [modalStyle] = useState(getModalStyle);
    const classes = useStyles();


function openModal(){
    setOpen(true);
}

function closeModal(){
    setOpen(false);
}

function handleSubmit(e) {
    e.preventDefault()

    // const docRef = doc(db, 'folders')
    
    // // Create a folder in firebase database
    // updateDoc(docRef, {
    //     name:name,
    //     //parentId,
    //     //path,
    //     createdAt: db.getCurrentTimestamp
    // })

   

    setName("")
    closeModal()
}

    return (
        <div>
            <button className="button-white" onClick={openModal}>CREATE FOLDER</button>

            <Modal
                open={open}
                onClose={closeModal}
                aria-labelledby="simple-modal-title"
                aria-describedby = "simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <Form onSubmit={handleSubmit}>
                        <ModalBody>
                        <Form.Group>
                            <div>
                                <Form.Label className="modal-form-label">FOLDER NAME</Form.Label>
                                {/* <Form.Control 
                                    type="text"
                                    required
                                    value={name}
                                    onChange={e=>setName(e.target.value)}
                                    className="new-note-title"
                                    plac
                                /> */}
                                <Form.Control className="new-note-title" rows="1" placeholder="Enter here" required value={name}
                                    onChange={e=>setName(e.target.value)}/>
                            </div>
                        </Form.Group>
                        </ModalBody>
                        <ModalFooter>
                            <div className="create-folder-modal-footer">
                                <button className="button-green" type="submit">CREATE</button>
                                <button className="button-red" onClick={closeModal}>CANCEL</button>
                            </div>
                        </ModalFooter>
                    </Form>
                </div>
            </Modal>
        </div>
    )
}
