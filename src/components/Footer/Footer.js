import React from 'react';
import FooterPresentation from './FooterPresentation.js';


/**
 * "container" component:
 * Contains only logic (API call, data manupulation, event handles)
 */
class Footer extends React.Component {

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
      <FooterPresentation {...this.state} />
    );

  }

}

export default Footer;
