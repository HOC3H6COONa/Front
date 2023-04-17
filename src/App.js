import React from 'react'
import './App.css';
import {BrowserRouter, Route,Routes} from "react-router-dom";
import Map from "./Components/Map/Map";
import Nav from "./Components/Nav/Nav";
import EditProfileContainer from "./Components/Profile/EditProfile/EditProfileContainer";
import ActivitiesContainer from "./Components/Activities/ActivitiesContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import UsersContainer from "./Components/Users/UsersContainer";


function App(props) {
  return (
      <BrowserRouter>
        <div className={'APP'}>
          <HeaderContainer/>
          <Nav/>
          <div className={'AppContent'}>
            <Routes>
                <Route path="/Map" element={<Map/>}/>
                <Route path="/Profile/:userId" element = {<ProfileContainer/>}/>
                <Route path="/Activities" element ={<ActivitiesContainer/>}/>
                <Route path="/Users" element={<UsersContainer/>}/>
                <Route path="/EditProfile" element={<EditProfileContainer/>}/>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
