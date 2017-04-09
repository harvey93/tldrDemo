import React from 'react';

class TextToSpeech extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div className='tts-div'>
        <div className='tts-text-div'>
          <img className='tts-title-text' src='https://res.cloudinary.com/harvey93/image/upload/v1491780198/React_logo_wordmark_mvbish.png'/>
          <p>With the Addition of React Native Text To Speech, users now have the option to listen to article summaries. Perfect for the gym, listen to all the articles in your feed as you work out!</p>
        </div>
        <div className='tts-img-div'>
          <img
            className='tts-img'
            src='http://res.cloudinary.com/harvey93/image/upload/c_scale,h_300/v1491699350/tts_lwtavy.png'/>
      </div>
      </div>
    );
  }
}

export default TextToSpeech;
// http://res.cloudinary.com/harvey93/image/upload/c_scale,w_300/v1491771718/Google_2015_logo.svg_rjsifs.png
