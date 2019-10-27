import React, { Component } from 'react';
import Projects from './components/Projects';
import Links from './components/Links';
import About from './components/About';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Presentation from './components/Presentation';
import Navbar from './components/Toolbar/Navbar';
import SideDrawer from './components/SideDrawer/SideDrawer';
import Backdrop from './components/Backdrop/Backdrop';

class App extends Component {
  state = {
    sideDrawerOpen: false
  };

  drawerToggleClickHandler = () => {
    this.setState(prevState => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backdropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let sideDrawer;
    let backdrop;

    if (this.state.sideDrawerOpen) {
      sideDrawer = <SideDrawer />;
      backdrop = <Backdrop click={this.backdropClickHandler} />;
    }

    return (
      <Router>
        <div style={{ height: '100%' }}>
          <Navbar drawerClickHandler={this.drawerToggleClickHandler} />
          {sideDrawer}
          {backdrop}
          <main style={{ marginTop: '64px' }}>
            <Switch>
              <Route path='/' exact component={Presentation} />
              <Route path='/about' component={About} />
              <Route path='/portfolio' component={Projects} />
              <Route path='/contact' component={Links} />
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;
