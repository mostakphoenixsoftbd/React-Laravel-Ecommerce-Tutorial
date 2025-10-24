import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'; // Wrap the app with BrowserRouter once
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorkerRegistration from './serviceWorkerRegistration'; // Import service worker registration
import 'bootstrap/dist/css/bootstrap.min.css';
import '../src/assets/css/fontawesome.css'
import '../src/assets/css/style.css';
import '../src/assets/css/animate.min.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// Register the service worker in production only
if (process.env.NODE_ENV === 'production') {
    serviceWorkerRegistration.register(); // Register the service worker for production builds
} else {
    serviceWorkerRegistration.unregister(); // Do not register in development mode
}

reportWebVitals();
