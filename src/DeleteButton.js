import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     '& > *': {
//       margin: theme.spacing(1),
//     },
//   },
// }));


export default function DeleteButton(props){

  const {deleteData, id} = props;

  const handleClick = () => {
    deleteData(id);
  }
        return (
            <div className="DeleteButton">
                <Button onClick={handleClick} variant="contained" color="secondary">
                    Delete
                </Button>
            </div>
        );
}
