import React, { Component } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';

import Hero from './components/Hero/Hero.js';  
import Footer from './components/Footer/Footer.js';

import ParallaxSection from './components/ParallaxSection/ParallaxSection.js';
import PageSection from './components/PageSection/PageSection.js';
import DonationSection from './components/DonationSection/DonationSection.js';
import FeedbackSection from './components/FeedbackSection/FeedbackSection.js';
import MenuAppBar from './components/MenuAppBar/MenuAppBar.js';
import AppDrawer from './components/AppDrawer/AppDrawer.js';


import image3 from './img/paul-zoetemeijer-728643-unsplash.jpg';
import imgMask from './img/fancycrave-178739-unsplash.jpg';

import Grid from '@material-ui/core/Grid';

import './App.css';

class App extends Component {
  state = {
    drawer: {
      left: false,
    },
    
    sections: [
      {
        title: 'Hero',
        isActive: true,
        inMainMenu: false,
        text1: `Sugar plum cheesecake icing liquorice wafer sesame snaps. 
        Macaroon cupcake toffee dessert. Lollipop carrot cake caramels 
        cheesecake icing dragée soufflé jelly beans sweet roll.`,
        bgImg : image3,
      },
      {
        title: 'About Us',
        isActive: true,
        inMainMenu: true,
        text1: {
          val: `Wafer pudding icing cupcake lemon drops sugar plum. 
          Lemon drops fruitcake pastry tart. Apple pie soufflé topping. 
          Marzipan lollipop lollipop bonbon chupa chups carrot cake marzipan chocolate.`,
          pos: 3,
          type: 'text',
        },
        text2: {
          val: `Wafer pudding icing cupcake lemon drops sugar plum. 
          Lemon drops fruitcake pastry tart. Apple pie soufflé topping. 
          Marzipan lollipop lollipop bonbon chupa chups carrot cake marzipan chocolate.`,
          pos: 2,
          type: 'text',
          cta: {
            text: 'Contact Us',
            mui: {
              variant: 'contained',
              color: 'secondary',
            },
          },
        },
        img: {
          val: image3,
          alt: '...',
          pos: 1,
          type: 'img',
        },
      },
      {
        title: 'UkumbiTV',
        isActive: true,
        inMainMenu: true,
        text1: {
          val: `Wafer pudding icing cupcake lemon drops sugar plum. 
          Lemon drops fruitcake pastry tart. Apple pie soufflé topping. 
          Marzipan lollipop lollipop bonbon chupa chups carrot cake marzipan chocolate.`,
          pos: 3,
          type: 'text',
        },
        text2: {
          val: `Wafer pudding icing cupcake lemon drops sugar plum. 
          Lemon drops fruitcake pastry tart. Apple pie soufflé topping. 
          Marzipan lollipop lollipop bonbon chupa chups carrot cake marzipan chocolate.`,
          pos: 2,
          type: 'text',
          cta: {
            text: 'Contact Us',
            mui: {
              variant: 'contained',
              color: 'secondary',
            },
          },
        },
        img: {
          val: image3,
          alt: '...',
          pos: 1,
          type: 'img',
        },
      },
      {
        title: 'Douala Central',
        isActive: false,
        inMainMenu: true,
        text1: {
          val: `Wafer pudding icing cupcake lemon drops sugar plum. 
          Lemon drops fruitcake pastry tart. Apple pie soufflé topping. 
          Marzipan lollipop lollipop bonbon chupa chups carrot cake marzipan chocolate.`,
          pos: 3,
          type: 'text',
        },
        text2: {
          val: `Wafer pudding icing cupcake lemon drops sugar plum. 
          Lemon drops fruitcake pastry tart. Apple pie soufflé topping. 
          Marzipan lollipop lollipop bonbon chupa chups carrot cake marzipan chocolate.`,
          pos: 2,
          type: 'text',
          cta: {
            text: 'Contact Us',
            mui: {
              variant: 'contained',
              color: 'secondary',
            },
          },
        },
        img: {
          val: image3,
          alt: '...',
          pos: 1,
          type: 'img',
        },
      },
      {
        title: 'Call To Action',
        isActive: true,
        inMainMenu: false,
        text1: `Sugar plum cheesecake icing liquorice wafer sesame snaps. 
        Macaroon cupcake toffee dessert. Lollipop carrot cake caramels 
        cheesecake icing dragée soufflé jelly beans sweet roll.`,
        bgImg : imgMask,
      },
      {
        title: 'Help Us',
        isActive: false,
        inMainMenu: true,
        bgImg : imgMask,
        text: `Tart topping pie lemon drops pudding. 
              Fruitcake jelly donut jujubes toffee danish cheesecake 
              muffin. Toffee lemon drops sesame snaps donut brownie.`,
      },
    ],

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



          <ParallaxSection
            {...this.state.sections[0]}
            textKey="text1"
          />


          {/* <Hero /> */}
          
          <div className="container">
            <Grid 
              container 
              wrap="nowrap"
              direction="column"
              spacing={0}
            >  
              <PageSection
                {...this.state.sections[1]}
              />

              <PageSection
                {...this.state.sections[2]}
              />

              <PageSection
                {...this.state.sections[3]}
              />
            </Grid>
          </div>




          <ParallaxSection
            {...this.state.sections[4]}
            textKey="text1"
          />


          <DonationSection
            {...this.state.sections[5]}
            textKey="text1"
          />
  
          
          {/* <div className="container">
            <Grid 
              container 
              wrap="nowrap"
              direction="column"
              spacing={0}
            >  
            </Grid>
          </div> */}



          <Footer />

          {/* <FeedbackSection /> */}
        </div>
      </React.Fragment>
    );
  }
}

export default App;
