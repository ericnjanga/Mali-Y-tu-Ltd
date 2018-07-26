import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import './style.css';


/**
 * "container" presentation:
 * UI structure to be rendered
 */

const FooterPresentation = ({ spacing, style }) => {

  const sp = {
    background: '#ccc',
    height: 140,
    width: '100%',
  };

  console.log('*****spacing=', Number(spacing));

  return (
    <footer className="mainFooter" style={style.container}>
      <div className="container">
        <Grid
          container
          className="container"
          spacing={Number(spacing)}
          
        >
          <Grid item xs={12}>
            <Grid
              container
              justify="center"
              spacing={Number(spacing)}
            >
              <Grid item xs={4}>
                <h3 style={style.section1.text}>BE IN TOUCH</h3>
              </Grid>
              <Grid item xs={4}>
                <p style={style.section2.text}>500 Terry Francois St San Francisco, CA 94158</p>
                <p style={style.section2.text}>500 Terry Francois St San Francisco, CA 94158</p>
                <p style={style.section2.text}>500 Terry Francois St San Francisco, CA 94158</p>
              </Grid>
              <Grid item xs={4}>
                <Paper style={sp}/>
              </Grid>
            
            </Grid>
          </Grid>
        </Grid>
      </div>
    </footer>
  );

};

/**
 * Component props validation
 */
FooterPresentation.propTypes = {
  spacing: PropTypes.string,
  style: PropTypes.shape({}),
};

/**
 * Component props default values
 */
FooterPresentation.defaultProps = {
  spacing: '32',
  style: { // Default styles
    container: {
      backgroundColor: '#2F2E2E',
      padding: '40px 0',
    },
    section1: {
      text: {
        color: '#fff',
      },
    },
    section2: {
      text: {
        color: '#A0A09F',
      },
    }
  },
};

export default FooterPresentation;
