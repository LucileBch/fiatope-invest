import React from 'react';
import ReactDOM from 'react-dom/client';

// Importing general main styles
import './styles/index.css';

// Importing the router component
import App from './components/App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
