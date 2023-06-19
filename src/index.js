import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import App from './App';

import "../node_modules/react-bootstrap/dist/react-bootstrap";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { SocialIcon } from 'react-social-icons';
import "react-icons";
import AuthContextProvider from './store/AuthContextProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <AuthContextProvider >
        <App />
        </AuthContextProvider>
        );
