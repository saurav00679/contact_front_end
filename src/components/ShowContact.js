import React, {useState} from "react";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const ShowContact = (props)=>{
    const [open, setOpen] = useState(false);
    const [contact, setContact] = useState({});

    const style = {
      position: 'absolute',
      top: '40%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      width: 400,
      background: '#fff',
      border: '2px solid #000',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      padding: 16,
    };

    const handleOpen = (contact) =>{
      setContact(contact);
      setOpen(true);
    }

    const handleClose = () => {
      setOpen(false);
      setContact({});
    }

    return (
    <>
      <div className="details" onClick={() => handleOpen(props.contact)}>
        <p key={props.id}>{props.contact.name} {props.contact.contact_number}</p>
      </div>

      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Contact Details
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            <div className="contact_details">
              <p><strong>Name</strong> {contact?.name}</p><br/>
              <p><strong>Contact</strong> {contact?.contact_number}</p><br/>
              <p><strong>Email</strong> {contact?.email}</p>
            </div>
          </Typography>
        </Box>
      </Modal>
    </>
    );
}

export default ShowContact;