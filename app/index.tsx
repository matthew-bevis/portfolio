import React from 'react';
import ReactDOM from 'react-dom/client';
import Page from './page'; // Make sure the file name matches the import
import reportWebVitals from './reportWebVitals';
import Head from 'next/head';

const rootElement = document.getElementById('root');

if (rootElement) {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
    <React.StrictMode>
        <Page />
    </React.StrictMode>
    );
}

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();