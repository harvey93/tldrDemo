import React from 'react';

class Smmry extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div className='smmry-div'>
        <div className='text-div'>
          <h1>Using the SMMRY Api,</h1>
          <h1>Tldr will summarize long form articles</h1>
          <h1>by 85 - 90%. No need to worry about the</h1>
          <h1>details, now you can just skim through the</h1>
          <h1>important parts of every article. From</h1>
          <h1>Sports and Entertainment to Politics and Business,</h1>
          <h1>all your news in one place!</h1>
        </div>
        <div className='image-div'>
          <img
            className='phone-image'
            src='http://res.cloudinary.com/harvey93/image/upload/v1491689260/Screen_Shot_2017-04-08_at_3.07.19_PM_gkeyn4.png' />
        </div>
      </div>
    );
  }
}

export default Smmry;
