import React from 'react';
import PageSectionPresentation from './PageSectionPresentation.js';


/**
 * "container" component:
 * Contains only logic (API call, data manupulation, event handles)
 */
class PageSection extends React.Component {

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
      <PageSectionPresentation {...this.state} />
    );

  }

}

export default PageSection;
