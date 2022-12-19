import './style.scss';

function Bio() {

  return (
    <div className='layout' id='bio'>
      <div className="pic">
        <img src="/images/bio.png" />
      </div>
      <div className='text'>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore 
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className='links'>
        <a href='https://github.com/Shifteon'>
          <img src="/images/github.png" />
        </a>
        <a href='https://www.linkedin.com/in/benjamin-wyatt-a445101b2/'>
          <img src="/images/linkedin.png" />
        </a>
      </div>
    </div>
  );
}

export default Bio;