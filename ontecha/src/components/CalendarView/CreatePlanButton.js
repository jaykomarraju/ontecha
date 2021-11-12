import { useState } from "react";
import react from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';


export const CreatePlanButton = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleOpen = () => setShow(true);

    const [ uploadFrequencyValue, setUploadFrequencyValue] = useState(0); 
    const [ batchSizeValue, setBatchSizeValue] = useState(0); 
    const [ creationRateValue, setCreationRateValue] = useState(0); 
    const [ timeLengthValue, setTimeLengthValue] = useState(0); 
    const [ colorValue, setColorValue] = useState('#a25bbb'); 

    return (
        <>
            <Button variant='outline-secondary' onClick={handleOpen}>Create a Plan</Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>CREATE A NEW UPLOAD CYCLE</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modalBody">
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
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Create Plan
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default CreatePlanButton;