import React, {Component, Fragment} from 'react';
import {HashRouter} from "react-router";
import AppRoute from "./route/AppRoute";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


class App extends Component {
    render() {
        return (
            <Fragment>

                <HashRouter>
                    <AppRoute/>
                </HashRouter>

            </Fragment>
        );
    }
}

export default App;