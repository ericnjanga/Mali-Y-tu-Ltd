import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Parallax, Background } from 'react-parallax';
import { withStyles } from '@material-ui/core/styles';
import image1 from './../../img/josh-sobel-323797-unsplash.jpg';
import image2 from './../../img/joshua-oluwagbemiga-697804-unsplash.jpg';
import image3 from './../../img/paul-zoetemeijer-728643-unsplash.jpg';
import imgMask from './../../img/fancycrave-178739-unsplash.jpg';
// import './style.css';

/**
 * "container" presentation:
 * UI structure to be rendered
 */

const ParallaxSectionPresentation = ({
  classes,
  text,
  button,
  textClassName,
  spacing,
  bgImg,
}) => (
  <div
    className={classes.root}
  >
    <p className={textClassName}>{ text }</p>
    {
      button &&
      <Button
        {...button.mui}
      >
        {button.text}
      </Button>
    }






    {/* <Parallax strength={300}>
      <div
        className={`parallax-container ${classes.root}`}
      >
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
          >
            {
              text && <p className={classes.compTitle}>{ text }</p>
            }
          </Grid>
        </Grid>
      </div>
      
      <Background className="custom-bg">
        <img className="parallax-container__img" src={bgImg} alt="fill murray" />
      </Background>
    </Parallax> */}
  </div>
);


const styles = theme => ({
  root: {
    // display: 'flex',
    // alignItems: 'center',
    border: '30px solid lime',
  },
  // container: {
  //   marginLeft: 'auto',
  //   marginRight: 'auto',
  //   [theme.breakpoints.up('sm')]: {
  //     maxWidth: '750px',
  //   },
  //   [theme.breakpoints.up('md')]: {
  //     maxWidth: '970px',
  //   },
  //   [theme.breakpoints.up('lg')]: {
  //     maxWidth: '1170px',
  //   },
  // },
  // compTitle: {
  //   fontWeight: '700',
  //   fontSize: '1.3rem',
  //   color: '#fff',
  //   textAlign: 'center',
  //   // fontStyle: 'italic',
  //   fontFamily: "'Antic Didone', serif",
  //   [theme.breakpoints.up('sm')]: {
  //     fontSize: '1.6rem',
  //   },
  //   [theme.breakpoints.up('md')]: {
  //     fontSize: '2.5rem',
  //   },
  //   [theme.breakpoints.up('lg')]: {
  //     fontSize: '3rem',
  //   },
  // },
  // item: {
  //   padding: theme.spacing.unit * 2,
  //   border: '3px solid lime',
  //   [theme.breakpoints.down('sm')]: {
  //     padding: `${theme.spacing.unit * 5}px!important`,
  //   },
  // },
});


/**
 * Component props validation
 */
ParallaxSectionPresentation.propTypes = {
  text: PropTypes.string.isRequired,
  button: PropTypes.shape({}),
  textClassName: PropTypes.shape({}),
  // spacing: PropTypes.string,
};

/**
 * Component props default values
 */
ParallaxSectionPresentation.defaultProps = {
  button: PropTypes.shape({}),
  textClassName: PropTypes.shape({}),
  // text: '',
  // spacing: '40',
};


export default withStyles(styles)(ParallaxSectionPresentation);
