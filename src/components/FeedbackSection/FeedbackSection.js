import React from 'react';
import FeedbackSectionPresentation from './FeedbackSectionPresentation.js';


/**
 * "container" component:
 * Contains only logic (API call, data manupulation, event handles)
 */
class FeedbackSection extends React.Component {

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
      <FeedbackSectionPresentation {...this.state} />
    );

  }

}

export default FeedbackSection;
