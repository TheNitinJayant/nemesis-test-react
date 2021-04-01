import React, { Component } from 'react';

import './Dashboard.css';
import UserTable from './UserTable';


function createData(name, userName, email, phone, website) {
    return { name, userName, email, phone, website };
}
  
const fakeUserData = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const API = 'https://jsonplaceholder.typicode.com/users';

export default class Dashboard extends Component {


    constructor(props){
        super(props);

        this.state = {
            userData : fakeUserData,
            lastID : 0,
        }

        this.updateData = this.updateData.bind(this);
        this.addData = this.addData.bind(this);
        this.deleteData = this.deleteData.bind(this);
    }

    updateData(id, data){

        const newUserData = this.state.userData.map( user => {
            if(user.id === id)
            {
                return data;
            }
            return user;
        });

        fetch('https://jsonplaceholder.typicode.com/posts/1', {
            method: 'PUT',
            body: JSON.stringify(newUserData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);

            this.setState( {
                userData : newUserData
            } );
        });
    }

    addData(newData){

        const userID = this.state.lastID+1;
        newData.id = userID;

        const newUserData = [...this.state.userData, newData];

        fetch(API, {
            method: 'POST',
            body: JSON.stringify(newData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => {
            console.log(json);

            
            this.setState({
                userData: newUserData,
                lastID: userID,
            });
        });
    }

    deleteData(id){
        fetch(API, {
            method: 'DELETE',
        });    

        let deletedData = {};
        this.setState(
            {
                userData : this.state.userData.filter( user => {
                    if(user.id !== id ){
                        deletedData = user;
                    }
                    return (user.id !== id);
                })
            }
        )
    }

    componentDidMount(){
        const userData = [];
        let id = this.state.lastID;
        
        fetch(API)
        .then((res)=> res.json())
        .then((data) => {
            data.forEach(element => {
                const temp = {};
                temp.id = id;
                id++;
                temp.name = element.name;
                temp.userName = element.username;
                temp.email = element.email;
                temp.phone = element.phone;
                temp.website = element.website;

                userData.push(temp);
            });
            this.setState({userData: userData, lastID: id});
        })
        .catch((err)=>{
            console.log("There was some error fetching data: ", err);
        });

        // console.log(userData);
    }

    render(){

        const {userData, lastID} = this.state;
        
        return (
            <div className="Dashboard">
                <UserTable setOpenPopup={this.setOpenPopup} lastID={lastID} userData={userData} updateData={this.updateData} addData={this.addData} deleteData={this.deleteData} />
            </div>
        )
    }
    
}
