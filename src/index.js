//Dependencies
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';

//Routes
import AppRoutes from './routes';

//Assets
import './app.scss';

ReactDOM.render(
    <Router>
        <AppRoutes/>
    </Router>,
    document.getElementById('app')
);