import React, {Component, Fragment} from 'react';
import NavMenuDesktop from "../components/common/NavMenuDesktop";
import FooterDesktop from "../components/common/FooterDesktop";
import ProductDetails from "../components/productDetails/ProductDetails";
import SuggestedProducts from "../components/productDetails/SuggestedProducts";

class ProductDetailsPage extends Component {
    render() {
        return (
            <Fragment>
                {/*<h1>This is Homepage</h1>*/}
                <NavMenuDesktop/>

                <ProductDetails/>
                <SuggestedProducts/>
                <FooterDesktop/>
            </Fragment>
        );
    }
}

export default ProductDetailsPage;