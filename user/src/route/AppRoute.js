// AppRoute.js
import React, { Component, Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';  // Don't import BrowserRouter here, as it's already in index.js
import HomePage from '../pages/HomePage';
import UserOnboardPage from "../pages/UserOnboardPage";
import ContactPage from "../pages/ContactPage";
import PolicyPage from "../pages/PolicyPage";
import RefundPage from "../pages/RefundPage";
import ProductDetailsPage from "../pages/ProductDetailsPage";
import NotificationPage from "../pages/NotificationPage";
import FavouritePage from "../pages/FavouritePage";
import CartPage from "../pages/CartPage";  // Correct import

class AppRoute extends Component {
    render() {
        return (
            <Fragment>
                <Routes> {/* Use Routes, without the need for BrowserRouter here */}
                    <Route path="/" element={<HomePage />} />
                    <Route path="/onboard" element={<UserOnboardPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                    <Route path="/policy" element={<PolicyPage />} />
                    <Route path="/refund" element={<RefundPage />} />
                    <Route path="/productdetails" element={<ProductDetailsPage />} />
                    <Route path="/notification" element={<NotificationPage />} />
                    <Route path="/favourite" element={<FavouritePage />} />
                    <Route path="/cart" element={<CartPage />} />
                    {/* Add more routes here */}
                </Routes>
            </Fragment>
        );
    }
}

export default AppRoute;
