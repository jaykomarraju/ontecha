import React, {useState} from 'react'
import firebase from "firebase/compat/app";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {storage, db} from '../../firebase'
import { collection, doc, setDoc, FieldValue } from "firebase/firestore";

import { makeStyles } from '@material-ui/core/styles';
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
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        borderRadius:'20px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3),
    },
}));

const UploadFile = () => {
const classes = useStyles();

const [modalStyle] = useState(getModalStyle);


const [open, setOpen] = useState(false);
const [file,setFile] = useState(null);
const [uploading, setUploading]= useState(false);

const handleOpen = () => {
    setOpen(true);
}

const handleClose = () => {
    setOpen(false);
}

const handleChange = (e) => {
    if(e.target.files[0]){
        setFile(e.target.files[0]);
    }
}

const handleUpload=()=>{


    setUploading(true);

    const dbRef = collection(db, "files");

    const metadata = {
        contentType: '@any'
      };

    const storageRef = ref(storage, 'files/' + file.name);

    const uploadTask = uploadBytesResumable(storageRef,file, metadata);

    uploadTask.on("state_changed", (uploadSnapshot) => {
        getDownloadURL(storageRef).then(function(url){

            setDoc(doc(dbRef, "myFiles"),{
                //timestamp: FieldValue.serverTimestamp(),
                caption: file.name,
                fileUrl: url,
                size: uploadSnapshot.bytesTransferred,
            });
            // db.collection('myFiles').add({
                // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
                // caption: file.name,
                // fileUrl: url,
                // size: uploadSnapshot.bytesTransferred,
            // })

            setUploading(false)
            setOpen(false)
            setFile(null)
        })
    })
    // uploadTask.on('state_changed', (snapshot) => {
    //     snapshot.ref.getDownloadURL().then(function(url) {
            // db.collection('myFiles').add({
            //     timestamp: firebase.firestore.FieldValue.serverTimestamp(),
            //     caption: file.name,
            //     fileUrl: url,
            //     size: snapshot.bytesTransferred,
            // })

            // setUploading(false)
            // setOpen(false)
            // setFile(null)
    //     })
    // })
}

    return (
        <div>
            <button className="button-white" onClick={handleOpen}>UPLOAD FILE</button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby = "simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <p className="file-select-heading">Select the files you want to upload</p>
                    {
                        uploading ? (
                            <p>Uploading...</p>
                        ) : (
                            <>
                                <input className="inputfile" type="file" onChange={handleChange} />
                                <button className="button-green" onClick={handleUpload}>UPLOAD</button>
                                <button className="button-red" onClick={handleClose}>CANCEL</button>
                            </>
                        )
                    }
                </div>
            </Modal>
        </div>
    )
}

export default UploadFile
