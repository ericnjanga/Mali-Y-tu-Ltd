import React from 'react';
import PropTypes from 'prop-types';
import TextAndCtaPresentation from './TextAndCtaPresentation.js';


/**
 * "container" component:
 * Contains only logic (API call, data manupulation, event handles)
 */
class TextAndCta extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      text: this.props.text,
      button: this.props.button,
      textClassName: this.props.textClassName,
    };

  }

  render() {

    return (
      <TextAndCtaPresentation
        {...this.state}
      />
    );

  }

}


/**
 * Component props validation
 */
TextAndCta.propTypes = {
  text: PropTypes.string.isRequired,
  button: PropTypes.shape({}),
  textClassName: PropTypes.shape({}),
};

/**
 * Component props default values
 */
TextAndCta.defaultProps = {
  button: PropTypes.shape({}),
  textClassName: PropTypes.shape({}),
};


export default TextAndCta;
