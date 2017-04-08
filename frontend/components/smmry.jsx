import React from 'react';

class Smmry extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div className='smmry-div'>
        <div>
          <img src='http://res.cloudinary.com/harvey93/image/upload/c_scale,h_275/v1491694381/document-icon-19_g03xu6.png'/>
        </div>
        <div>
          <img src='http://res.cloudinary.com/harvey93/image/upload/c_scale,h_200/v1491695103/arrow-point-to-right_tsyctn.png'/>
        </div>
        <div>
          <img src='http://res.cloudinary.com/harvey93/image/upload/c_scale,h_200/v1491694380/document-icon-10_qfdaea.png'/>
        </div>
      </div>
    );
  }
}

export default Smmry;

// <div className='smmry-div'>
//   <div className='text-div'>
//     <h1 className='line'>Using the SMMRY Api,</h1>
//     <h1 className='line'>Tldr will summarize long form articles</h1>
//     <h1 className='line'>by 85 - 90%. No need to worry about the</h1>
//     <h1 className='line'>details, now you can just skim through the</h1>
//     <h1 className='line'>important parts of every article. From</h1>
//     <h1 className='line'>Sports and Entertainment to Politics and </h1>
//     <h1 className='line'>Business, all your news in one place!</h1>
//   </div>
//   <div className='image-div'>
//     <img
//       className='phone-image'
//       src='http://res.cloudinary.com/harvey93/image/upload/v1491693189/smmry-iphone_wrzrll.png' />
//   </div>
// </div>
