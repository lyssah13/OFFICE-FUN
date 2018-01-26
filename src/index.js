import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import SecretSanta from './components/SecretSanta.js';

ReactDOM.render(<SecretSanta />, document.getElementById('root'));
registerServiceWorker();
