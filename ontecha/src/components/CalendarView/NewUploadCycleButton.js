import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import './CreatePlan.css'


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
        width: '40%',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        borderRadius:'20px',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2,4,3)
    },
}));

export const NewUploadCycleButton = () => {

    const classes = useStyles();
    const [modalStyle] = useState(getModalStyle);
    const [open, setOpen] = useState(false);

    const [ uploadFrequencyValue, setUploadFrequencyValue] = useState(0); 
    const [ batchSizeValue, setBatchSizeValue] = useState(0); 
    const [ creationRateValue, setCreationRateValue] = useState(0); 
    const [ timeLengthValue, setTimeLengthValue] = useState(0); 
    const [ colorValue, setColorValue] = useState('#a25bbb'); 

    const handleOpen = () => {
        setOpen(true);
    }
    
    const handleClose = () => {
        setOpen(false);
    }


    return (
        <div>
            <button className="button-green" onClick={handleOpen}>CREATE NEW UPLOAD CYCLE</button>

            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="simple-modal-title"
                aria-describedby = "simple-modal-description"
            >
                <div style={modalStyle} className={classes.paper}>
                    <p className="create-plan-heading">CREATE A NEW UPLOAD CYCLE</p>
                    
                    <div class="slidecontainer">
                        <label className="whatsup">How many times do you want to upload per month?</label>
                        <RangeSlider
                        value={uploadFrequencyValue}
                        onChange={changeEvent => setUploadFrequencyValue(changeEvent.target.value)}
                        />
                    </div>
                    <div class="slidecontainer">
                        <label>How many days is each creation batch?</label>
                        <RangeSlider
                        value={batchSizeValue}
                        onChange={changeEvent => setBatchSizeValue(changeEvent.target.value)}
                        />
                    </div>
                    <div class="slidecontainer">
                        <label>How many days worth of content do you aim to shoot in a single batch?</label>
                        <RangeSlider
                        value={creationRateValue}
                        onChange={changeEvent => setCreationRateValue(changeEvent.target.value)}
                        />
                    </div>
                    <div class="slidecontainer">
                        <label>Start Date:</label>
                        <input type="date" value="2021-10-19"
       min="2021-10-19" max="2050-12-31"/>
                    </div>
                    <div class="slidecontainer">
                        <label>End Date:</label>
                        <input type="date" value="2021-12-19"
       min="2021-10-19" max="2050-12-31"/>
                    </div>
                    <div class="slidecontainer">
                        <label>What platform is this upload cycle for: </label>
                        <input type="text" className='textBox' placeholder="Enter here..."/>
                    </div>
                    <div class="slidecontainer">
                        <label>Choose color: </label>
                        <input type="color"/>
                    </div>
                                <button className="button-green" onClick={handleClose}>CREATE</button>
                                <button className="button-red" onClick={handleClose}>CANCEL</button>
                           
                    
                </div>
            </Modal>
        </div>
    )
}

export default NewUploadCycleButton