import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {getProfile,setProfile} from "../../Redux/profile-reducer";
import {useLocation,useParams,useNavigate} from "react-router-dom";



class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.router.params.userId;
        this.props.getProfile(userId);
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

export default connect(mapStateToProps,{setProfile,getProfile})(withRouter(ProfileContainer));