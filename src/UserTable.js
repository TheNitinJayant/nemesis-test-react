import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import TextField from '@material-ui/core/TextField';


import UpdateButton from './UpdateButton';
import DeleteButton from './DeleteButton';
import AddButton from './AddButton';

import './UserTable.css';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function UserTable(props){
    
  const {userData, updateData, addData, deleteData, lastID} = props;

  const [name, setName] = useState("");
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");

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


  const classes = useStyles();
    return (
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Actions</TableCell>
              <TableCell>Name</TableCell>
              <TableCell align="right">Username</TableCell>
              <TableCell align="right">Email</TableCell>
              <TableCell align="right">Phone</TableCell>
              <TableCell align="right">Website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {userData.map((row) => (
              <TableRow key={row.id}>
                <div className="buttons-container">
                  <UpdateButton 
                    id={row.id} 
                    name={row.name}
                    userName={row.userName}
                    email={row.email}
                    phone={row.phone}
                    website={row.website}  
                    updateData={updateData} />
                  <DeleteButton id={row.id} deleteData={deleteData} />
                </div>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.userName}</TableCell>
                <TableCell align="right">{row.email}</TableCell>
                <TableCell align="right">{row.phone}</TableCell>
                <TableCell align="right">{row.website}</TableCell>
              </TableRow>
            ))}
              <TableRow>

              <div className="buttons-container">
                  <AddButton data={currentUserData} lastID={lastID} addData = {addData}  />
              </div>
                
                <TableCell component="th" scope="row">
                  <TextField onChange={handleChangeName} value={name} defaultValue="defaultName" id="outlined-basic" label="Name" variant="outlined" />
                </TableCell>
                <TableCell align="right"><TextField onChange={handleChangeUserName} value={userName} defaultValue="defaultUserName" id="outlined-basic" label="Username" variant="outlined" /></TableCell>
                <TableCell align="right"><TextField onChange={handleChangeEmail} value={email} defaultValue="defaultEmail" id="outlined-basic" label="email" variant="outlined" /></TableCell>
                <TableCell align="right"><TextField onChange={handleChangePhone} value={phone} defaultValue="defaultPhone" id="outlined-basic" label="Phone" variant="outlined" /></TableCell>
                <TableCell align="right"><TextField onChange={handleChangeWebsite} value={website} defaultValue="defaultWebsite" id="outlined-basic" label="Website" variant="outlined" /></TableCell>
              </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
}
