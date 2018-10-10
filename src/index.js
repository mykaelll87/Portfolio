import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
ReactDOM.render(
<BrowserRouter>
<Switch>
<Route path="/:lang(\w{2})/" render={(props)=>
    <App lang={props.match.params.lang}/>
}/>
<Route>
    <App lang=""/>
</Route>
</Switch> 
</BrowserRouter>, 
document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
