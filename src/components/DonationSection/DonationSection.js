import React from 'react';
import DonationSectionPresentation from './DonationSectionPresentation.js';


/**
 * "container" component:
 * Contains only logic (API call, data manupulation, event handles)
 */
class DonationSection extends React.Component {

  constructor(props) {

    super(props);
    this.state = {
      title: '*** carousel title',
      // items: dummyPosts,
    };

  }

  render() {


    console.log('???????---->', this.state );

    return (
      <DonationSectionPresentation {...this.state} />
    );

  }

}

export default DonationSection;
