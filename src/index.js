import React from 'react';
import ReactDOM from 'react-dom';
import './styles/sui/dist/semantic.min.css';
import './styles/sass/index.scss';
import App from './components/App';
import { register }  from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
register();


