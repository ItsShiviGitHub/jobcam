import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { ThemeProvider } from '@mui/material';
import AppTheme from './theme/AppTheme';
import { store } from './reduxStore/store';
import { Provider } from 'react-redux';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <BrowserRouter>
        <AuthProvider>
            <ThemeProvider theme={AppTheme}>
                <Provider store={store}>
                    <App />
                </Provider>
            </ThemeProvider>
        </AuthProvider>
    </BrowserRouter>

);

reportWebVitals();


