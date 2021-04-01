import React from 'react';

// import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

export default function AddButton(props){
        const {addData, data} = props;

        const handleClick = () => {
          if(data.name!=="" && data.userName!=="" && data.email!=="" && data.phone!=="" && data.website!==""){
            addData(data);
          } 
        }

        return (
            <div>
                <Button onClick={handleClick} variant="contained" color="default">
                    Add
                </Button>
            </div>
        );
}
