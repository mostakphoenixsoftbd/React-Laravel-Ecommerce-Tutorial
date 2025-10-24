import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import Policy from "../components/others/Policy";
import FooterDesktop from "../components/common/FooterDesktop";
import CartList from "../components/Cart/CartList";

class CartPage extends Component {
    render() {
        return (
            <Fragment>

                <Fragment>
                    {/*<h1>This is Cart Page</h1>*/}
                    <NavMenuDesktop/>

                    <CartList/>
                    <FooterDesktop/>
                </Fragment>


                
            </Fragment>
        );
    }
}

export default CartPage;