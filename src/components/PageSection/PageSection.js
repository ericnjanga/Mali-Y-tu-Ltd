import React from 'react';
import PropTypes from 'prop-types';
import PageSectionPresentation from './PageSectionPresentation.js';


/**
 * "container" component:
 * Contains only logic (API call, data manupulation, event handles)
 */
class PageSection extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      title: this.props.title,
      isActive: this.props.isActive,
      cta: this.props.cta,
    };

  }

  componentDidMount() {

    const dataProps = [
      this.props.img,
      this.props.text1,
      this.props.text2,
    ];
    // const stateProps = Object.keys(this.state);
    const data = [];

    for (let i = 0, l = dataProps.length; i < l; i += 1) {

      // const prop = stateProps[i];
      const val = dataProps[i];

      if (dataProps[i] && typeof val.pos === 'number') {

        data.splice(val.pos, 0, val);

      }

    }

    console.log('*********---->data=', data );
    this.setState({ data });
  }

  render() {

    if (!this.state.data) {

      return false;

    }


    return (
      <PageSectionPresentation {...this.state} />
    );

  }

}


/**
 * Component props validation
 */
PageSection.propTypes = {
  title: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
  // imgPos: PropTypes.number.isRequired,
  text1: PropTypes.shape({}).isRequired,
  text2: PropTypes.shape({}),
  img: PropTypes.shape({}),
  cta: PropTypes.shape({}),
};

/**
 * Component props default values
 */
PageSection.defaultProps = {
  text2: PropTypes.shape({}),
  img: PropTypes.shape({}),
  cta: PropTypes.shape({}),
};

export default PageSection;
