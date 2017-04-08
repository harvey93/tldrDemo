import React from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';

class Footer extends React.Component {
  constructor(){
    super();

  }

  render(){
    return(
      <div className='footer-div'>
        <div className='profile-div'>

          <h1>Harvey Mirijanyan</h1>

          <a href='https://github.com/harvey93'>
            <div className='icon-div'>
              <i className="fa fa-github-square" aria-hidden="true"></i>
              <h1>Github</h1>
            </div>
          </a>

          <a href='https://www.linkedin.com/in/harvey-mirijanyan-79a133ba'>
            <div className='icon-div'>
              <i className="fa fa-linkedin-square" aria-hidden="true"></i>
              <h1>Linkedin</h1>
            </div>
          </a>
        </div>

        <div className='profile-div'>
          <h1>Ryley Sill</h1>
            <a href='https://github.com/RyleySill93'>
              <div className='icon-div'>
                <i className="fa fa-github-square" aria-hidden="true"></i>
                <h1>Github</h1>
              </div>
            </a>
            <a href='https://www.linkedin.com/in/ryleysill'>
              <div className='icon-div'>
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                <h1>Linkedin</h1>
              </div>
            </a>
        </div>
        <div className='profile-div'>
          <h1>Daniel Cheng</h1>
          <a href='https://github.com/MrDSGC'>
              <div className='icon-div'>
                <i className="fa fa-github-square" aria-hidden="true"></i>
                <h1>Github</h1>
              </div>
          </a>
          <a href='https://www.linkedin.com/in/dcheng47/'>
              <div className='icon-div'>
                <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                <h1>Linkedin</h1>
              </div>
          </a>
        </div>
      </div>
    );
  }
}

export default Footer;
