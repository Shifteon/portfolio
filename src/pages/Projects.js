import CardContainer from '../components/CardContainer';
import './style.scss';

function Projects() {

  const cards = [{
    image: "images/pokemon.png",
    title: "Pokedex",
    content: "A Pokedex application built using JavaScript.",
    links: [{
      href: "https://github.com/Shifteon/shifteon.github.io/tree/master/wdd330/pokedex",
      text: "Github"
    }, {
      href: "https://shifteon.github.io/wdd330/pokedex/index.html",
      text: "View"
    }]
  }, {
    image: "images/dance-card.png",
    title: "Dance Card SDD",
    content: "Software design document for a dance card application. Worked with a team of 17 people to create this.",
    links: [{
      href: "https://docs.google.com/document/d/1IlNKa682XbbSfQORzRms6kyAXc6B1PcI/edit?usp=sharing&ouid=114077024874967180302&rtpof=true&sd=true",
      text: "View"
    }]
  }, {
    image: "images/campus_art.png",
    title: "Campus Art",
    content: "A web application to help people navigate the artwork on the BYU Idaho campus.",
    links: [{
      href: "https://github.com/Shifteon/campus_art",
      text: "Github"
    }]
  }, {
    image: "images/hedgehog.png",
    title: "Hedgehog Garden",
    content: "A console based game written in Python.",
    links: [{
      href: "https://github.com/Shifteon/Hedgehog-Garden",
      text: "Github"
    }]
  }, {
    image: "images/music-theory.png",
    title: "Music Theory Help",
    content: "A website that teaches basic music theory concepts. Built using HTML, CSS, and JavaScript. Includes a chord progression generator built with JavaScript.",
    links: [{
      href: "http://musictheoryhelp.glitch.me/",
      text: "View"
    }]
  }, {
    image: "images/howitzer.png",
    title: "Howitzer",
    content: "A physics simulator/game built in C++ and opengl. GitHub repository has to be private.",
    links: [{
      href: "https://youtu.be/kBIM77WMCUo",
      text: "Video"
    }]
  }, {
    image: "images/Notepad(2).png",
    title: "Notepad",
    content: "Notepad is a simple web app for creating and storing notes. It also contains support for multiple users.",
    links: [{
      href: "https://github.com/Shifteon/Notepad",
      text: "Github"
    }]
  }, {
    image: "images/cows.png",
    title: "Cattle in Idaho",
    content: "GIS map to visualize the amount of cattle in Idaho compared to the number of people in every county.",
    links: [{
      href: "https://github.com/Shifteon/Cattle-in-Idaho",
      text: "Github"
    }, {
      href: "https://shifteon.github.io/cows",
      text: "View"
    }]
  }, {
    image: "images/media_library.png",
    title: "Media Library",
    content: "Kotlin application to keep track of your media using a SQLite database",
    links: [{
      href: "https://github.com/Shifteon/Media-Library",
      text: "Github"
    }]
  }, {
    image: "images/waypoint.png",
    title: "Waypoint Clothing",
    content: "A website for a student clothing company.",
    links: [{
      href: "https://shifteon.github.io/waypoint",
      text: "View"
    }]
  }, {
    image: "images/hedgehog-graden-graphical.png",
    title: "Hedgehog Garden Graphical",
    content: "A graphical version of Hedgehog Garden made using C# and Raylib.",
    links: [{
      href: "https://github.com/Shifteon/hedgehog-garden-graphical",
      text: "Github"
    }]
  }];

  return ( 
    <div className='layout' id='projects' >
      <h1 className='center-text'>Projects</h1>
      <CardContainer cards={cards}/> 
    </div>
  );
}

export default Projects;