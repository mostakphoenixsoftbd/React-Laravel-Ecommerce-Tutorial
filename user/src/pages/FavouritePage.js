import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import Policy from "../components/others/Policy";
import FooterDesktop from "../components/common/FooterDesktop";
import Favourite from "../components/Favourite/Favourite";

class FavouritePage extends Component {
    render() {
        return (
            <Fragment>
                {/*<h1>This is Homepage</h1>*/}
                <NavMenuDesktop/>

                <Favourite/>
                <FooterDesktop/>
            </Fragment>
        );
    }
}

export default FavouritePage;