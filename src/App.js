import './App.css';
import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./context/UserContext";
import Routes from './routes/Routes';
import axios from "axios";

function App() {

  const [currentUser, setCurrentUser] = useState(null);
  
  async function login(formData){
    try{
      const params = new URLSearchParams();
      params.append('email', `${formData.email}`);
      params.append('password', `${formData.password}`);

     const response = await axios.post('http://dev.rapptrlabs.com/Tests/scripts/user-login.php', params)
  
     const user = response.data.user_username;
     setCurrentUser(user);
     return { loggedIn : true }
    }catch(errors){
      return { loggedIn: false, errors}
    }
  }

  return (
    <React.Fragment>
      <BrowserRouter> 
      <UserContext.Provider value={{currentUser, setCurrentUser}}>
        <Routes login={login} setCurrentUser={setCurrentUser} />
      </UserContext.Provider>
      </BrowserRouter>
    </React.Fragment>
  );
}

export default App;
