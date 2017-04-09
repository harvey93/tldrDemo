import React from 'react';

class TextToSpeech extends React.Component {
  constructor() {
    super();
  }

  render(){
    return(
      <div className='tts-div'>
        <h1>TTS</h1>
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
