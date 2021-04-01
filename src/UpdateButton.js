import React, { useState } from 'react';


// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import EditPopup from './EditPopup';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));

export default function UpdateButton(props){

  const {id, name, userName, email, phone, website, updateData} = props;

  const [openPopup, setOpenPopup] = useState(false);

  function toggleOpenPopup() {
    setOpenPopup(!openPopup);
  }

  const currentUserData = {
    id: id,
    name: name,
    userName: userName,
    email: email,
    phone: phone,
    website: website
}

  const handleClick = () => {
    toggleOpenPopup();
  }

  return (
      <div className="UpdateButton">
        <Button onClick={handleClick} variant="contained" color="primary">
          Edit
        </Button>

        <EditPopup updateData={updateData} previousData={currentUserData} openPopup={openPopup} setOpenPopup={toggleOpenPopup}>

        </EditPopup>
      </div>
  );
}
