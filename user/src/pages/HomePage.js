import React, {Component, Fragment} from 'react';
import FeaturedProducts from "../components/home/FeaturedProducts";
import '../../src/assets/css/animate.min.css'
import Categories from "../components/home/Categories";
import Collection from "../components/home/Collection";
import NewArrival from "../components/home/NewArrival";
import HomeTop from "../components/home/HomeTop";
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import FooterDesktop from "../components/common/FooterDesktop";

class HomePage extends Component {
    render() {
        return (
            <Fragment>
                {/*<h1>This is Homepage</h1>*/}
                <NavMenuDesktop/>
                <HomeTop/>
                <FeaturedProducts/>
                <Categories/>
                <NewArrival/>
                <Collection/>
                <FooterDesktop/>
            </Fragment>
        );
    }
}

export default HomePage;