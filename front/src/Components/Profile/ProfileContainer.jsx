import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile,setProfile} from "../../Redux/profile-reducer";
import {withRouter} from "../../utilits/HOC/WithRouter";
import {compose} from "redux";






class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
/*        if (!userId){
            userId = 1;/!*this.props.AuthId;*!/
        }*/
        this.props.getProfile(userId);

    }

   componentDidUpdate(prevProps,PrevState) {
        if (this.props.router.params.userId !== prevProps.userId) {
            this.props.getProfile(this.props.router.params.userId);
        }
    }

    render(){
        return (
            <Profile {...this.props}/>
        )
    }
}


let mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
        AuthId: state.auth.userid,
        isAuth: state.auth.isAuth,
});



export default compose(
    withRouter,
    connect(mapStateToProps,{setProfile,getProfile}))(ProfileContainer)