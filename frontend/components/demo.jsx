import React from 'react';

class Demo extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div className='demo-container'>
        <div className='demo-div'>
          <div className='iphone-div'>
          <img
            className='gif'
            src='http://res.cloudinary.com/harvey93/image/upload/v1491853637/giphy_1_lmfj2z.gif'/>
        </div>
        </div>
      </div>
    );
  }
}

export default Demo;

// https://res.cloudinary.com/harvey93/image/upload/v1491775737/giphy_ostf9l.gif
