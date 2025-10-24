import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import Policy from "../components/others/Policy";
import FooterDesktop from "../components/common/FooterDesktop";
import Notification from "../components/common/Notification/Notification";

class NotificationPage extends Component {

    componentDidMount() {

        window.scrollTo(0, 0);
    }


    render() {
        return (
            <Fragment>
                {/*<h1>This is Homepage</h1>*/}
                <NavMenuDesktop/>

                <Notification/>
                <FooterDesktop/>
            </Fragment>
        );
    }
}

export default NotificationPage;