import React from 'react';
import ReactDOM from 'react-dom';
import './styles/sui/dist/semantic.min.css';
import './styles/sass/index.scss';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();


