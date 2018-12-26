import React, { Component } from 'react';
import Posts from './components/posts';
import PostForm from './components/postForm';
import {Provider} from 'react-redux'

import store from './store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <div>
          <PostForm />
          <Posts/>
      </div>
      </Provider> 

    );
  }
}

export default App;
