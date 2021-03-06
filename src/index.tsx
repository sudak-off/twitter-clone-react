import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './index.css';

import App from './App';
import { ThemeProvider, CssBaseline } from '@material-ui/core';
import theme from './theme';

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <App />
            </ThemeProvider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root'),
);