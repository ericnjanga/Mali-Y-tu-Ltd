import React from 'react';
import PropTypes from 'prop-types';
import ParallaxSectionPresentation from './ParallaxSectionPresentation.js';


/**
 * "container" component:
 * Contains only logic (API call, data manupulation, event handles)
 */
class ParallaxSection extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      bgImg: this.props.bgImg,
      text: this.props[this.props.textKey],
    };

  }

  render() {

    return (
      <ParallaxSectionPresentation
        {...this.state}
      />
    );

  }

}


/**
 * Component props validation
 */
ParallaxSection.propTypes = {
  bgImg: PropTypes.string.isRequired,
  textKey: PropTypes.string,
};

/**
 * Component props default values
 */
ParallaxSection.defaultProps = {
  textKey: '',
};


export default ParallaxSection;
