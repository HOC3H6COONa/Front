import React from 'react'
import './App.css';
import {Route, Routes } from "react-router-dom";
import Map from "./Components/Map/Map";
import EditProfileContainer from "./Components/Profile/EditProfile/EditProfileContainer";
import ProfileContainer from "./Components/Profile/ProfileContainer";
import HeaderContainer from "./Components/Header/HeaderContainer";
import UsersContainer from "./Components/Users/UsersContainer";
import LoginContainer from "./Components/Login/LoginContainer";
import NavContainer from "./Components/Nav/NavContainer";
import {connect} from "react-redux";
import {initialiseApp} from "./Redux/app-reducer";
import {Preloader} from "./utilits/Preloader";
import {compose} from "redux";
import {withRouter} from "./utilits/HOC/WithRouter";
import EventsContainer from "./Components/Events/EventsContainer";
import SingleEventContainer from "./Components/Events/Event/SingleEventContainer";
import RegistrationContainer from "./Components/Registration/RegistrationContainer";
import NewEventContainer from "./Components/Events/NewEvent/NewEventContainer";
import EditEventContainer from "./Components/Events/EditEvent/EditEventContainer";



class  App extends React.Component{

  componentDidMount() {
        this.props.initialiseApp();
  }

    render() {
/*        if (!this.props.initialised){
        return <Preloader/>
    }*/
        return (
            <div className={'APP'}>
                <HeaderContainer/>
                <NavContainer/>
                <div className={'AppContent'}>
                    <Routes>
                        <Route path="/Map" element={<Map/>}/>
                        <Route path="/Profile/:userId" element={<ProfileContainer/>}/>
                        <Route path="/Profile" element={<ProfileContainer/>}/>
                        <Route path="/Events" element={<EventsContainer/>}/>
                        <Route path="/Event/:eventId" element={<SingleEventContainer/>}/>
                        <Route path="/Event/:eventId/Edit" element ={<EditEventContainer/>}/>
                        <Route path="CreateEvent" element={<NewEventContainer/>}/>
                        <Route path="/Users" element={<UsersContainer/>}/>
                        <Route path="/EditProfile" element={<EditProfileContainer/>}/>
                        <Route path="/login" element={<LoginContainer/>}/>
                        <Route path="/Registration" element={<RegistrationContainer/>}/>
                    </Routes>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    initialised: state.app.initialised,
});

export default compose(
    withRouter,
    connect(mapStateToProps,{initialiseApp}))(App)

/*
useEffect(( ) => {
    props.initializeApp();
}, [ ] )*/
