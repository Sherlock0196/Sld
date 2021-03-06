/**
 * App entry point
 */
// Polyfill
import 'babel-polyfill';

// Libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { Router,Route , browserHistory } from 'react-router';
import { Provider } from 'react-redux';

// Routes
import Login from './Login';
import Register from './Register';
import Quiz from './parent-ques/quiz';
import ChildQues1 from './memory-game/ChildQues1';
import ChildQues2 from './nosense-reading/ChildQues2';
import ChildQues3 from './nosense-writing/ChildQues3';
import ChildQues4 from './onemin-writing/ChildQues4';
import ChildQues5 from './click-game/ChildQues5';
import ChildQues6 from './basic-maths/ChildQues6';
import ChildQues7 from './higher-maths/ChildQues7';
import Result from './result/Result';


import style from '../styles/app.scss';
// ID of the DOM element to mount app on
const DOM_APP_EL_ID = 'app';

// Render the router
ReactDOM.render((
  <Router history={browserHistory}>
    	<Route path='/login' component = {Login} > </Route>
    	<Route path='/register' component = {Register} > </Route>
    	<Route path='/quiz' component = {Quiz} > </Route> 
    	<Route path='/child1' component = {ChildQues1} ></Route>
    	<Route path='/child2' component = {ChildQues2} ></Route>
    	<Route path='/child3' component = {ChildQues3} ></Route>
    	<Route path='/child4' component = {ChildQues4} ></Route>
    	<Route path='/child5' component = {ChildQues5} ></Route>
        <Route path='/child6' component = {ChildQues6} ></Route>
        <Route path='/child7' component = {ChildQues7} ></Route>
        <Route path='/result' component = {Result} ></Route>
  </Router>
), document.getElementById(DOM_APP_EL_ID));

