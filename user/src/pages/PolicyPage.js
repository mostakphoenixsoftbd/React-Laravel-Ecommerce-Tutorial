import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import HomeTop from "../components/home/HomeTop";
import FeaturedProducts from "../components/home/FeaturedProducts";
import Categories from "../components/home/Categories";
import NewArrival from "../components/home/NewArrival";
import Collection from "../components/home/Collection";
import FooterDesktop from "../components/common/FooterDesktop";
import Policy from "../components/others/Policy";

class PolicyPage extends Component {
    render() {
        return (
            <Fragment>
                {/*<h1>This is Homepage</h1>*/}
                <NavMenuDesktop/>

<Policy/>
                <FooterDesktop/>
            </Fragment>
        );
    }
}

export default PolicyPage;