import React, { Component, Fragment} from 'react';
import { Route, Switch, } from 'react-router-dom';
import Blogs from './components/Blogs';
import BlogForm from './components/BlogForm';


class App extends Component {
  render() {
    return (
      <Fragment>
        <BlogForm />
        <Switch>
          <Route exact path='/' component={Blogs} />
        </Switch>
      </Fragment>
    );
  }
}

export default App;
