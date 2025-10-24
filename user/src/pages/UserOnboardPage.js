import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import FooterDesktop from "../components/common/FooterDesktop";
import UserOnboard from "../components/common/UserOnboard";

class UserOnboardPage extends Component {
    render() {
        return (
            <Fragment>
                <NavMenuDesktop/>

                <UserOnboard/>





                <FooterDesktop/>

            </Fragment>
        );
    }
}

export default UserOnboardPage;