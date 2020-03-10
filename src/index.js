import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import Login from './udemy/Login'
import Navbar from './udemy/Navbar';
import Signup from './udemy/Signup';
import Footer from './udemy/Footer';
import Welcome from './udemy/Welcome';
import SingleArticle from './udemy/SingleArticle';
import CreateArticle from './udemy/CreateArticle';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Navbar />
      <Route exact path="/" component={Welcome} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/article/:slug" component={SingleArticle} />
      <Route path="/articles/create" component={CreateArticle} />
      <Footer />
    </div>
  </BrowserRouter>
  , document.getElementById('root'));
  serviceWorker.unregister();
