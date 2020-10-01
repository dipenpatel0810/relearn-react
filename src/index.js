import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Counter from '../src/components/Counter';
import Todo from '../src/components/Todo';
import Home from './post-example/Home';
import PostInfo from './post-example/PostInfo';
import UnsplashHome from '../src/unsplash/UnsplashHome';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  withRouter
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/post/:id">
          <PostInfo />
        </Route>
        <Route path="/demo">
          <h1>Demo</h1>
        </Route>
        <Route path="/unsplash">
          <UnsplashHome />
        </Route>

      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
