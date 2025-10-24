import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import UserOnboard from "../components/common/UserOnboard";
import FooterDesktop from "../components/common/FooterDesktop";
import Contact from "../components/common/Contact";

class ContactPage extends Component {
    render() {
        return (
            <Fragment>

                <NavMenuDesktop/>

                <Contact/>





                <FooterDesktop/>

            </Fragment>
        );
    }
}

export default ContactPage;