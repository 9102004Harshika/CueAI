import axios from 'axios';

const adminCreationToken = "some_secure_token";

axios.post('http://localhost:5000/create-admin', { 
    fname: 'Abhay', 
    lname: 'Das', 
    email: 'abhay744das@gmail.com', 
    token: adminCreationToken 
  })
  .then(result => {
    console.log('Admin created successfully');
  })
  .catch(err => console.log(err));
