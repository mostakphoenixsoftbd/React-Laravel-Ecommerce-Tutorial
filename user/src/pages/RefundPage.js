import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import HomeTop from "../components/home/HomeTop";
import FooterDesktop from "../components/common/FooterDesktop";
import Refund from "../components/others/Refund";

class RefundPage extends Component {
    render() {
        return (
            <Fragment>
                {/*<h1>This is Homepage</h1>*/}
                <NavMenuDesktop/>

                <Refund/>

                <FooterDesktop/>
            </Fragment>
        );
    }
}

export default RefundPage;