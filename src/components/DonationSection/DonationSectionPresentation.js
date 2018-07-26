import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import './style.css';


/**
 * "container" presentation:
 * UI structure to be rendered
 */

const DonationSectionPresentation = ({ spacing, style }) => {

  const sp = {
    background: '#ccc',
    height: 140,
    width: '100%',
  };

  console.log('*****spacing=', Number(spacing));

  return (
    <section className="mainFooter" style={style.container}>
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
              <Grid item xs={12} sm={6}>
                <h3 className="fs1" style={style.section1.text}>
                  Help us
                </h3>
              </Grid>
              
              <Grid item xs={12} sm={6}>
                <p>Soufflé icing ice cream. Cookie cake cupcake bonbon. Icing marshmallow tart. Chocolate bar cotton candy gummies tootsie roll.</p>
                <Button variant="contained" color="secondary">
                  Contact Us
                </Button>
              </Grid>
            
            </Grid>
          </Grid>
        </Grid>
      </div>
    </section>
  );

};

/**
 * Component props validation
 */
DonationSectionPresentation.propTypes = {
  spacing: PropTypes.string,
  style: PropTypes.shape({}),
};

/**
 * Component props default values
 */
DonationSectionPresentation.defaultProps = {
  spacing: '32',
  style: { // Default styles
    container: {
      // backgroundColor: '#2F2E2E',
      padding: '40px 0',
    },
    section1: {
      text: {
        // color: '#fff',
      },
    },
    section2: {
      text: {
        color: '#A0A09F',
      },
    }
  },
};

export default DonationSectionPresentation;
