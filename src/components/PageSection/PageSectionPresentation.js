import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
// import './PageSectionPresentation.css';


/**
 * "container" presentation:
 * UI structure to be rendered
 */

const PageSectionPresentation = ({ container, style }) => {

  return (
    <header className="hero" style={style.container}>
      <div>
        <h1 className="hero-title">Les meilleures voitures</h1>
        <p>*******Chocolate bar apple pie lollipop brownie carrot cake halvah chocolate bar. Toffee candy tiramisu gummi bears. Halvah cake cheesecake. Chocolate bar apple pie lollipop brownie carrot cake halvah chocolate bar. </p>
        
        <Button variant="contained" color="secondary">
          Contact Us
        </Button>
      </div>
    </header>
  );

};

/**
 * Component props validation
 */
PageSectionPresentation.propTypes = {
  // title: PropTypes.string,
  // children: PropTypes.shape({}).isRequired,
  style: PropTypes.shape({}),
};

/**
 * Component props default values
 */
PageSectionPresentation.defaultProps = {
  // title: '',
  style: { // Default styles
    container: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
  },
};

export default PageSectionPresentation;
