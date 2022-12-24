import './style.scss';

function Bio() {

  return (
    <div className='layout' id='bio'>
      <div className="pic">
        <img src="/images/bio.png" alt='Benjamin Wyatt' />
        <h2>Benjamin Wyatt</h2>
        <h3>Software Engineer</h3>
      </div>
      <div className='bio-content'>
        <div className='text'>
          <h2>About Me</h2>
          <p>
          I'm a software engineer that specializes in web development. I excel in taking ideas and requirements, 
          and creating real life applications. I love being creative and tackling difficult problems.
          </p>
          <p>
          I graduated from Brigham Young University Idaho with a B.S. in Software Engineering in December 2022. 
          
          </p>
        </div>
        <div className='links'>
          <a href='https://github.com/Shifteon'>
            <img src="/images/github.png" alt='github logo' />
          </a>
          <a href='https://www.linkedin.com/in/benjamin-wyatt-a445101b2/'>
            <img src="/images/linkedin.png" alt='linkedin logo' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Bio;