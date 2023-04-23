import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile,setProfile} from "../../Redux/profile-reducer";
import {withRouter} from "../../utilits/HOC/WithRouter";
import {compose} from "redux";
import {withAuth} from "../../utilits/HOC/WithAuth";


class ProfileContainer extends React.Component {


    componentDidMount() {
        let userId = this.props.router.params.userId;
        this.props.getProfile(userId);

    }

   componentDidUpdate(prevProps,PrevState) {
        if (prevProps.userId !== this.props.router.params.userId){

      /*      console.log(prevProps.profile.id)
            console.log(this.props.router.params.userId)*/
         /*   this.props.getProfile(this.props.router.params.userId)*/
        }
    }

    render(){
        return (
            <Profile {...this.props}/>
        )
    }
}



let AuthRedirectComponent = withAuth(ProfileContainer)

let mapStateToPropsforNav = (state) =>({
    isAuth: state.auth.isAuth
});

AuthRedirectComponent = connect(mapStateToPropsforNav)(AuthRedirectComponent)




let mapStateToProps = (state) => ({
        profile: state.profilePage.profile,
        AuthId: state.auth.userid,
        isAuth: state.auth.isAuth,
});




export default compose(
    withRouter,
    connect(mapStateToProps,{setProfile,getProfile}))(AuthRedirectComponent)