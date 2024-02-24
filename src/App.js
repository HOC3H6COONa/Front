import React from 'react'
import './App.css';
import {Route, Routes } from "react-router-dom";
import Map from "./Components/Map/Map";
import {connect} from "react-redux";
import {initialiseApp} from "./Redux/app-reducer";
import {Preloader} from "./utilits/Preloader";
import {compose} from "redux";
import {withRouter} from "./utilits/HOC/WithRouter";
import EventsContainer from "./Components/Events/EventsContainer";
import SingleEventContainer from "./Components/Events/Event/SingleEventContainer";
import EditEventContainer from "./Components/Events/EditEvent/EditEventContainer";
import Users from "./Components/Users/Users";
import Header from "./Components/Header/Header";
import Nav from "./Components/Nav/Nav";
import Login from "./Components/Login/Login";
import Profile from "./Components/Profile/Profile";
import EditProfile from "./Components/Profile/EditProfile/EditProfile";



class  App extends React.Component{

  componentDidMount() {
        this.props.initialiseApp();
  }

    render() {
/*        if (!this.props.initialised){
        return <Preloader/>
    }*/
        return (
            <div className={'APP'} style={{backgroundColor: "whitesmoke",height:'100vh'}}>
                <Header/>
                <Nav/>
                <div className={'AppContent'}>
                    <Routes>
                        <Route path="/login" element={<Login/>}/>
                        <Route path="/Map" element={<Map/>}/>
                        <Route path="/Profile/:userId" element={<Profile/>}/>
                        <Route path="/Profile" element={<Profile/>}/>
                        <Route path="/Events" element={<EventsContainer/>}/>
                        <Route path="/Event/:eventId" element={<SingleEventContainer/>}/>
                        <Route path="/Event/:eventId/Edit" element ={<EditEventContainer/>}/>
                        <Route path="/Users" element={<Users/>}/>
                        <Route path="/EditProfile" element={<EditProfile/>}/>
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

