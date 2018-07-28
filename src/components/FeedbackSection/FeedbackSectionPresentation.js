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

const FeedbackSectionPresentation = ({ spacing, style }) => {

  return (
    <div className="feedbackSection">
      <div className="feedbackSection__f">
        <div className="feedbackSection__f1">
          <div class="feedbackSection__f1-1" style={style.section1}>
            <div class="feedbackSection__f1-1-1" style={style.text}>***(Discover a world of ideas with Pinterest</div>
          </div>
          <div className="feedbackSection__f2">
              
            <Button variant="outlined" color="secondary" style={style.button}>
              Secondary
            </Button>
          </div>
        </div>
      </div>
    </div>
  );

};

/**
 * Component props validation
 */
FeedbackSectionPresentation.propTypes = {
  spacing: PropTypes.string,
  style: PropTypes.shape({}),
};

/**
 * Component props default values
 */
FeedbackSectionPresentation.defaultProps = {
  spacing: '40',
  style: { // Default styles
    container: {
    },
    section1: {
      marginBottom: '20px',
    },
    text: {
      color: '#fff',
      fontSize: '21px',
      fontWeight: '700',
    },
    button: {
      color: '#fff',
      border: '1px solid #fff',
    },
  },
};

export default FeedbackSectionPresentation;
