import './style.scss';

function Experience() {
  
  return (
    <div className='layout' id='experience'>
      <h1 className='center-text'>Experience</h1>
      <div className='experience-section'>
        <img src='/images/church.jpg' alt='church of jesus christ of latter-day saints logo' />
        <div className='description'>
          <h2>Full Stack Engineer Intern</h2>
          <h3>Church of Jesus Christ of Latter-day Saints (Sep. 2022 - Jan. 2023)</h3>
          <p>
          Full stack engineer working on a web application used by the world-wide church to manage
          properties. Added new features and fixed many bugs. Used .NET, C#, Angular.js, Microsoft SQL Server, 
          and Azure. Learned to work well with a team and with an Agile methodology.
          </p>
        </div>
      </div>
      <div className='experience-section'>
        <div className='description'>
          <h2>Software Development Engineer Intern</h2>
          <h3>Amazon (Jun. 2022 - Sep. 2022)</h3>
          <p>
          Worked on the customer service chatbot. Completed an individual project to update existing infrastructure for 
          internal customers. Used AWS, DynamoDb, React, Java, Git, and learned to use many Amazon internal tools.
          Worked with the business and customer to design product and decide on features. Learned the importance of asking 
          good questions.
          </p>
        </div>
        <img src='/images/amazon.png' alt='amazon logo' />
      </div>
      <div className='experience-section'>
        <img src='/images/byui.png' alt='brigham young university idaho logo' />
        <div className='description'>
          <h2>Tutor</h2>
          <h3>Brigham Young University Idaho (Sep. 2021 - Apr. 2022)</h3>
          <p>
          Tutor for Introduction to Databases, Programming with Classes, Web Backend Development I, 
          and Web Frontend Development I. Helped students succeed in their classes and grasp new concepts.
          </p>
        </div>
      </div>
      <div className='experience-section'>
        <div className='description'>
          <h2>Software Engineering B.S.</h2>
          <h3>Brigham Young University Idaho (Jan. 2020 - Dec. 2022)</h3>
          <p>
          Graduated with a Bachelors of Science in Software Engineering. Learned to work hard and to accomplish 
          my goals. Learned leadership through group projects.
          </p>
        </div>
        <img src='/images/byui.png' alt='brigham young university idaho logo' />
      </div>
    </div>
  );
}

export default Experience;