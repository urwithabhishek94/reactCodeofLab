import React from 'react';
import { Button, Modal, ButtonGroup } from 'react-bootstrap';
import { useState } from "react";
// import ReactDOM from "react-dom";

function Model(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    return (
      <>
      
            <li className="list-group-item font-weight-normal text-info ">Name: {props.name }
            <Button variant="success" 
              className="text-decoration-none float-right"
              onClick={handleShow}> Activity Periods </Button>
            </li>
            <li className="list-group-item font-weight-normal text-info">Location: {props.location}</li>  
        
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Activity Periods</Modal.Title>
          </Modal.Header>
        <Modal.Body>{props.activity_periods.map(function (row,i) { 
												return <div key={i}>
												 <li className="list-group-item font-weight-normal text-info  mb-2">
                           Start Time:  {row.start_time} <br /> End Time: {row.end_time}</li>
												</div>
											})}
         </Modal.Body>
          <Modal.Footer>
            <Button variant="success" onClick={handleClose}>
              Close
            </Button>
            {/* <Button variant="primary" onClick={handleClose}>
              Save Changes
            </Button> */}
          </Modal.Footer>
        </Modal>
        
      </>
    );
  }
  
  export default Model;