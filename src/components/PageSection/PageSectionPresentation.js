import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import TextAndCta from './../TextAndCta/TextAndCta.js';
import './style.css';


/**
 * "container" presentation:
 * UI structure to be rendered
 */

const PageSectionPresentation = ({
  title,
  isActive,
  data,
  cta,
  classes,
  spacing,
  style
}) => {

  if (!isActive) {

    return false;

  }

  return (
    <div
      className={classes.root}
    >


      <Grid
        container
        className={classes.container}
        spacing={Number(spacing)}
      >
        {
          title &&
          <Grid item xs={12}>
            <h2
              className={classes.compTitle}
            >
              {title}
            </h2>
          </Grid>
        }


        {
          data.map((item) => {
            return (
              <Grid
                key={item.pos}
                className={classes.item}
                item
                xs={12}
                sm={12}
                md={4}
              >
                {
                  item.type === 'img' &&
                  <img
                    className="tmb"
                    src={item.val}
                    alt={item.alt}
                  />

                }
                {
                  item.type === 'text' &&
                  <TextAndCta
                    text={item.val}
                    textClassName={classes.itemText}
                    // button={cta}
                  />
                }
              </Grid>
            )
          })
        }
        
        
        {/* {
          (imgPos === 1) &&
          <React.Fragment>
            <Grid
              className={classes.item}
              item
              xs={12}
              sm={12}
              md={4}
            >
              <img
                className="tmb"
                src={img.val}
                alt={title}
              />
            </Grid>
            <Grid
              className={classes.item}
              item
              xs={12}
              sm={12}
              md={4}
            >
              <p className={classes.itemText}>{text1.val}</p>
            </Grid>
            <Grid
              className={classes.item}
              item
              xs={12}
              sm={12}
              md={4}
            >

              <TextAndCta
                text={text1.val}
                textClassName={classes.itemText}
                button={cta}
              />
            </Grid>
          </React.Fragment>
        }

        {
          (imgPos === 2) &&
          <React.Fragment>
            <Grid
              className={classes.item}
              item
              xs={12}
              sm={12}
              md={4}
            >
              <p className={classes.itemText}>We envision to create a Television Network that will only broadcast in African languages and produce highly educative &amp; empowering shows.</p>
            </Grid>
            <Grid
              className={classes.item}
              item
              xs={12}
              sm={12}
              md={4}
            >
              <img
                className="tmb"
                src={img.val}
                alt={title}
              />
            </Grid>
            <Grid
              className={classes.item}
              item
              xs={12}
              sm={12}
              md={4}
            >
              <p className={classes.itemText}>Marshmallow candy canes cotton candy tootsie roll dessert pie macaroon. Candy powder liquorice gummies soufflé gummi bears biscuit danish cheesecake. Candy canes chocolate cake oat cake.</p>
              <Button variant="contained" color="secondary">
                Contact Us
              </Button>
            </Grid>
          </React.Fragment>
        }

        {
          (imgPos === 3) &&
          <React.Fragment>
            <Grid
              className={classes.item}
              item
              xs={12}
              sm={12}
              md={4}
            >
              <p className={classes.itemText}>We envision to create a Television Network that will only broadcast in African languages and produce highly educative &amp; empowering shows.</p>
            </Grid>
            <Grid
              className={classes.item}
              item
              xs={12}
              sm={12}
              md={4}
            >
              <p className={classes.itemText}>Marshmallow candy canes cotton candy tootsie roll dessert pie macaroon. Candy powder liquorice gummies soufflé gummi bears biscuit danish cheesecake. Candy canes chocolate cake oat cake.</p>
              <Button variant="contained" color="secondary">
                Contact Us
              </Button>
            </Grid>
            <Grid
              className={classes.item}
              item
              xs={12}
              sm={12}
              md={4}
            >
              <img
                className="tmb"
                src={img.val}
                alt={title}
              />
            </Grid>
          </React.Fragment>
        } */}
          
      </Grid>
    </div>
  );

};


const styles = theme => ({
  root: {
    display: 'flex',
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
    marginBottom: '40px',
    fontWeight: '300',
    fontSize: '2.3rem',
    border: '3px solid lime',
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
  itemText: {
    fontSize: '20px',
    lineHeight: '30px',
    color: 'purple',
  },
});

/**
 * Component props validation
 */
PageSectionPresentation.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  data: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  spacing: PropTypes.string,
  style: PropTypes.shape({}),
  cta: PropTypes.shape({}),
};


/**
 * Component props default values
 */
PageSectionPresentation.defaultProps = {
  spacing: '40',
  style: { // Default styles
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
  cta: PropTypes.shape({}),
};


export default withStyles(styles)(PageSectionPresentation);
