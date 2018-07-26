import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Hero from './components/Hero/Hero.js';
import Footer from './components/Footer/Footer.js';
import PageSection from './components/PageSection/PageSection.js';
import DonationSection from './components/DonationSection/DonationSection.js';
import FeedbackSection from './components/FeedbackSection/FeedbackSection.js';
import MenuAppBar from './components/MenuAppBar/MenuAppBar.js';
import AppDrawer from './components/AppDrawer/AppDrawer.js';

import Grid from '@material-ui/core/Grid';

import './App.css';

class App extends Component {
  state = {
    drawer: {
      left: false,
    },
  };


  toggleDrawer = (side, open) => () => {
    let state = this.state;
    state.drawer[side] = open;
    this.setState({ state });
  };


  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <div className="App">
          <AppDrawer {...this.state} toggleDrawer={this.toggleDrawer} />
          <MenuAppBar toggleDrawer={this.toggleDrawer} />
          <Hero />

          <div className="container">
            <Grid 
              container 
              wrap="nowrap"
              direction="column"
              spacing={0}
            >
              <Grid item>
                <PageSection />
              </Grid>
              <Grid item>
                <PageSection />
              </Grid>
              <Grid item>
                <PageSection />
              </Grid>
              <DonationSection />
            </Grid>
          </div>

          <Footer />

          <FeedbackSection />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
