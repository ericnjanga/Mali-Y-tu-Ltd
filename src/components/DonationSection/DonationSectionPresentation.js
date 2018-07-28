import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import './style.css';


/**
 * "container" presentation:
 * UI structure to be rendered
 */

const DonationSectionPresentation = ({
  classes,
  spacing,
  style,
}) => {

  const sp = {
    background: '#ccc',
    height: 140,
    width: '100%',
  };


  return (
    <section className={classes.root}>
      <div className={classes.container}>
        <Grid
          container
          justify="center"
          spacing={Number(spacing)}
          className="panels-opposite"
        >
          <Grid
            className="panel-left"
            item
            xs={12}
            sm={6}
          >
            <h2
              style={style.section1.text}
              className={classes.compTitle}
            >
              Help us
            </h2>
          </Grid>
          
          <Grid
            className="panel-right"
            item
            xs={12}
            sm={6}
          >
            <p className="fs4">Soufflé icing ice cream. Cookie cake cupcake bonbon. Icing marshmallow tart. Chocolate bar cotton candy gummies tootsie roll.</p>
            <Button variant="contained" color="secondary">
              Contact Us
            </Button>
          </Grid>
        
        </Grid>
      </div>
    </section>
  );

};


const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: '60px 0',
    border: '3px solid red',
  },
  container: {
    marginLeft: 'auto',
    marginRight: 'auto',
    [theme.breakpoints.up('sm')]: {
      maxWidth: '750px',
    },
    [theme.breakpoints.up('md')]: {
      maxWidth: '970px',
    },
    [theme.breakpoints.up('lg')]: {
      maxWidth: '1170px',
    },
  },
  compTitle: {
    fontWeight: '300',
    fontSize: '5rem',
    fontStyle: 'italic',
    fontFamily: "'Antic Didone', serif",
  },
});


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
  spacing: '40',
  style: { // Default styles
    container: {
      // backgroundColor: '#2F2E2E',
      // padding: '60px 0',
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
    },
  },
};


export default withStyles(styles)(DonationSectionPresentation);
