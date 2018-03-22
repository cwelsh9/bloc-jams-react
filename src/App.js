import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/Album';

class App extends Component {
  render() {
    return (
      <div class="mdl-layout mdl-js-layout mdl-layout--fixed-header" className="App">
        <header class="mdl-layout__header">
          <div class="mdl-layout__header-row">
            <span class="mdl-layout-title">
              <Link style={{textDecoration: "none"}} to="/">Bloc Jams</Link>
            </span>
            <div class="mdl-layout-spacer"></div>
            <nav class="mdl-navigation mdl-layout--large-screen-only">

              <Link class="mdl-navigation__link" to='/library'>Library</Link>
            </nav>
          </div>
        </header>
        <main class="mdl-layout__content">
          <div class="page-content">
            <Route exact path="/" component={Landing} />
            <Route path="/library" component={Library} />
            <Route path="/album/:slug" component={Album} />
          </div>
        </main>
      </div>
    );
  }
}

export default App;
