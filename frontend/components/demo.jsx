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
            src='https://res.cloudinary.com/harvey93/image/upload/v1491775737/giphy_ostf9l.gif'/>
        </div>
        </div>
      </div>
    );
  }
}

export default Demo;
