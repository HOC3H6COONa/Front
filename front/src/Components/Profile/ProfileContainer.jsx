import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import axios from "axios";
import {setProfile} from "../../Redux/profile-reducer";
import {useLocation,useParams,useNavigate} from "react-router-dom";
import {ProfileApi} from "../../api/profileapi";


class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        ProfileApi.getProfile(userId)
            .then(data => {
                this.props.setProfile(data);
            });
    }

    render(){
        return (
            <Profile {...this.props}/>
        )
    }
}


let mapStateToProps = (state) => ({
        profile: state.profilePage.profile
});

function withRouter(Component) {
    function ComponentWithRouterProp(props) {
        let location = useLocation();
        let navigate = useNavigate();
        let params = useParams();
        return (
            <Component
                {...props}
                router={{ location, navigate, params }}
            />
        );
    }
    return ComponentWithRouterProp;
}

export default connect(mapStateToProps,{setProfile})(withRouter(ProfileContainer));