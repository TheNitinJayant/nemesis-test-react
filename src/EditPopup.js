import React, {useState} from 'react'
import { Dialog, DialogContent, DialogTitle, DialogActions } from '@material-ui/core';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';

export default function EditPopup(props) {

    const {openPopup, setOpenPopup, previousData, updateData} = props;

    const [name, setName] = useState(previousData.name);
    const [userName, setUserName] = useState(previousData.userName);
    const [email, setEmail] = useState(previousData.email);
    const [phone, setPhone] = useState(previousData.phone);
    const [website, setWebsite] = useState(previousData.website);

    const currentUserData = {
        name: name,
        userName: userName,
        email: email,
        phone: phone,
        website: website
    }


    const updateCurrentUserData = (name, userName, email, phone, website) => {
        currentUserData.name = name;
        currentUserData.userName = userName;
        currentUserData.email= email;
        currentUserData.phone= phone;
        currentUserData.website= website;
      }
    
    const handleChangeName = (event) =>{
    setName(event.target.value);

    updateCurrentUserData(name, userName, email, phone, website);
    }

    const handleChangeUserName = (event) => {
    setUserName(event.target.value);

    updateCurrentUserData(name, userName, email, phone, website);
    }

    const handleChangeEmail = (event) => {
    setEmail(event.target.value);

    updateCurrentUserData(name, userName, email, phone, website);
    }


    const handleChangePhone = (event) => {
    setPhone(event.target.value);

    updateCurrentUserData(name, userName, email, phone, website);
    }

    const handleChangeWebsite = (event) => {
    setWebsite(event.target.value);

    updateCurrentUserData(name, userName, email, phone, website);
    }

    const handleClose = () => {
        setOpenPopup();
    }

    const handleSubmit = () => {
        updateData(previousData.id, currentUserData);
        setOpenPopup();
    }

    return (
        <Dialog open={openPopup}>
            <DialogTitle>
                <div>
                    Edit
                </div>
            </DialogTitle>

            <DialogContent style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>

                <TextField style={{padding: '1rem'}} onChange={handleChangeName} value={name} defaultValue="defaultName" id="outlined-basic" label="Name" variant="outlined" />

                <TextField style={{padding: '1rem'}} onChange={handleChangeUserName} value={userName} defaultValue="defaultUserName" id="outlined-basic" label="Username" variant="outlined" />

                <TextField style={{padding: '1rem'}} onChange={handleChangeEmail} value={email} defaultValue="defaultEmail" id="outlined-basic" label="email" variant="outlined" />

                <TextField style={{padding: '1rem'}} onChange={handleChangePhone} value={phone} defaultValue="defaultPhone" id="outlined-basic" label="Phone" variant="outlined" />

                <TextField style={{padding: '1rem'}} onChange={handleChangeWebsite} value={website} defaultValue="defaultWebsite" id="outlined-basic" label="Website" variant="outlined" />    

            </DialogContent>

            <DialogActions>
                <Button onClick={handleClose} color="primary">
                    Cancel
                </Button>
                <Button onClick={handleSubmit} color="primary">
                    Save
                </Button>
            </DialogActions>
        </Dialog>
    )
}
