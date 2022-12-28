import Card from "./Card";
import React from "react";
import "./CardContainer.scss";

function Column({content}) {

  return (
    <div className="column">
      {content.map(c => c)}
    </div>
  );
}

function getWindowDimensions() {
  const { innerWidth: width, innerHeight: height } = window;
  return {
    width,
    height
  };
}

function CardContainer({cards}) {
  const [content, setContent] = React.useState();
  const [numColumns, setNumColumns] = React.useState(3);
  const [windowDimensions, setWindowDimensions] = React.useState(getWindowDimensions());

  React.useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }
    
    if (windowDimensions.width < 1000) {
      if (windowDimensions.width < 600) {
        setNumColumns(1);
      } else {
        setNumColumns(2);
      }
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  React.useEffect(() => {
    if (windowDimensions.width < 1000) {
      if (windowDimensions.width < 600) {
        setNumColumns(1);
      } else {
        setNumColumns(2);
      }
    }
  }, [windowDimensions]);

  React.useEffect(() => {
    setContent(createContent());
  }, [numColumns]);

  const createContent = () => {
    const content = [];
    const columns = [];
    for (let i = 0; i < cards.length; i++) {
      for (let c = 0; c < numColumns; c++) {
        if (columns.length < numColumns)
          columns.push([]);

        if (i < cards.length) {
          columns[c].push(<Card 
            title={cards[i].title}
            image={cards[i].image}
            content={cards[i].content}
            links={cards[i].links}
          />);
        }
        i++;
      }
    }
  
    for (let c = 0; c < numColumns; c++) {
      content.push(<Column content={columns[c]} />);
    }
    return content;
  };

  return (
    <div className="card-container">
      {content}
    </div>
  );
}

export default CardContainer;