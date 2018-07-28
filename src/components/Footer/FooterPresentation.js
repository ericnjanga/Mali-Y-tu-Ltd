import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import './style.css';


/**
 * "container" presentation:
 * UI structure to be rendered
 */

const FooterPresentation = ({
  classes,
  spacing,
  style
}) => {

  const sp = {
    background: '#ccc',
    height: 140,
    width: '100%',
  };

  console.log('*****spacing=', Number(spacing));
  return (
    <footer className={classes.root} style={style.root}>

      <Grid
        container
        className={classes.container}
        justify="center"
        spacing={Number(spacing)}
      >
        <Grid
          className={classes.item}
          item
          xs={12}
          sm={12}
          md={4}
        >
          <h3
            style={style.section1.text}
            className={classes.compTitle}
          >BE IN TOUCH</h3>
        </Grid>
        <Grid
          className={classes.item}
          item
          xs={12}
          sm={12}
          md={4}
        >
          <p style={style.section2.text}>500 Terry Francois St San Francisco, CA 94158</p>
          <p style={style.section2.text}>500 Terry Francois St San Francisco, CA 94158</p>
          <p style={style.section2.text}>500 Terry Francois St San Francisco, CA 94158</p>
        </Grid>
        <Grid
          className={classes.item}
          item
          xs={12}
          sm={12}
          md={4}
        >
          <h3>Photo Credits</h3>
          <ul>
            <li>Photo by Oluwakemi Solaja on Unsplash</li>
            <li>Photo by Joshua Oluwagbemiga on Unsplash</li>
            <li>Photo by Oladimeji Odunsi on Unsplash</li>
            <li>Benny Jackson on Unsplash</li>
            <li>Photo by Fancycrave on Unsplash</li>
            <li>Photo by Paul Zoetemeijer on Unsplash</li>
            <li>Photo by ray rui on Unsplash</li>
            <li>Photo by John McArthur on Unsplash</li>
            <li>Photo by Josh Sobel on Unsplash</li>
          </ul>
        </Grid>
      </Grid>
    </footer>
  );

};


const styles = theme => ({
  root: {
    display: 'flex',
    padding: '60px 0',
    border: '3px solid red',
    backgroundColor: '#2F2E2E',
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
    fontSize: '3rem',
    fontStyle: 'italic',
    fontFamily: "'Antic Didone', serif",
  },
  item: {
    padding: theme.spacing.unit * 2,
    border: '3px solid lime',
    [theme.breakpoints.down('sm')]: {
      padding: `${theme.spacing.unit * 5}px!important`,
    },
    // textAlign: 'center',
    // color: theme.palette.text.secondary,
  },
});



/**
 * Component props validation
 */
FooterPresentation.propTypes = {
  classes: PropTypes.shape({}).isRequired,
  spacing: PropTypes.string,
  style: PropTypes.shape({}),
};

/**
 * Component props default values
 */
FooterPresentation.defaultProps = {
  spacing: '40',
  style: { // Default styles
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


export default withStyles(styles)(FooterPresentation);
// export default FooterPresentation;
