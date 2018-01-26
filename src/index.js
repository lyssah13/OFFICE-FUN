import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
// import './index.css';
import HomePage from './components/HomePage';
import SecretSanta from './components/SecretSanta';
import GetRandom from './components/GetRandom';
import Split  from './components/Split';
import registerServiceWorker from './registerServiceWorker';
// import '../stylesheets/main.css';

const Root = () => {
  return (
    <BrowserRouter>
      <div>
        <Route exact path="/" component={ HomePage } />
        <Route path="/secret-santa" component={ SecretSanta } />
        <Route path="/get-random" component={ GetRandom } />
        <Route path="/split" component={ Split } />
      </div>
    </BrowserRouter>
  )
}

render( <Root />, document.querySelector('#root') );
registerServiceWorker();
