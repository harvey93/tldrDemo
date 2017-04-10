import React from 'react';

const Header = ()=> {
  return(
    <div className='header-div'>
      <div className='logo-div'>
        <img
          className='logo-image'
          src="https://res.cloudinary.com/harvey93/image/upload/v1491784587/newspaper_ji7jfs.png"/>
      </div>
      <div className='repo-div'>
        <a href='https://github.com/harvey93/Scriblr'>
          <div className='header-icon-div'>
            <i className="fa fa-github-square" aria-hidden="true"></i>
            <h1 className='repo-link-text'>Project Repo</h1>
          </div>
        </a>
    </div>
    </div>
  );
};

export default Header;
