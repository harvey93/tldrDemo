import React from 'react';

class TextToSpeech extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div className='tts-div'>
        <div className='tts-text-div'>
          <p>With the Addition of Google Text To Speech, users now have the option to listen to article summaries as well. Perfect for the gym, listen to all the articles in your feed as you work out!</p>
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
