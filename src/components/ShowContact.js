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
    width: 500,
    background: '#fff',
    border: '1px solid #000',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: 16,
  };

  const smallScreenStyle = {
    width: '90%',
    padding: 12,
  };

  const extraSmallScreenStyle = {
    width: '95%',
    padding: 8,
  };
    
  style['@media (max-width: 600px)'] = smallScreenStyle;
  style['@media (max-width: 400px)'] = extraSmallScreenStyle;

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
          <h3>Contact Details</h3>
        </Typography>
        <Typography id="modal-modal-description" className="contact_details" sx={{ mt: 2 }}>
            <p><strong>Name</strong>: {contact?.name}</p><br/>
            <p><strong>Contact</strong>: {contact?.contact_number}</p><br/>
            <p><strong>Email</strong>: {contact?.email}</p>
        </Typography>
      </Box>
    </Modal>
  </>
  );
}

export default ShowContact;