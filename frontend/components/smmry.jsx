import React from 'react';

class Smmry extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div className='smmry-div-container'>
      <div className='smmry-div'>
        <div>
          <img
            className='image-background'
            src='http://res.cloudinary.com/harvey93/image/upload/c_scale,h_211/v1491697104/stack_nfcgmo.png'/>
        </div>
        <div>
          <img src='http://res.cloudinary.com/harvey93/image/upload/c_scale,h_153/v1491695103/arrow-point-to-right_tsyctn.png'/>
        </div>
        <div>
          <img src='http://res.cloudinary.com/harvey93/image/upload/c_scale,h_153/v1491694380/document-icon-10_qfdaea.png'/>
        </div>
      </div>
      <div className='text-div'>
        <img className='smmry-title-text' src='http://res.cloudinary.com/harvey93/image/upload/c_scale,w_200/v1491771672/smmry-logo_ntnkw3.png'/>
        <h1 className='line'>Using the SMMRY Api,
          Tldr will summarize long form articles
          by 85 - 90%. No need to worry about the
          details, now you can just skim through the
          important parts of every article.</h1>
      </div>
    </div>
    );
  }
}

export default Smmry;

// <div className='smmry-div'>
  // <div className='text-div'>
  //   <h1 className='line'>Using the SMMRY Api,</h1>
  //   <h1 className='line'>Tldr will summarize long form articles</h1>
  //   <h1 className='line'>by 85 - 90%. No need to worry about the</h1>
  //   <h1 className='line'>details, now you can just skim through the</h1>
  //   <h1 className='line'>important parts of every article./h1>
  // </div>
//   <div className='image-div'>
//     <img
//       className='phone-image'
//       src='http://res.cloudinary.com/harvey93/image/upload/v1491693189/smmry-iphone_wrzrll.png' />
//   </div>
// </div>
