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

function CardContainer({cards}) {
  const numColumns = 3;

  const [content, setContent] = React.useState();

  React.useEffect(() => {
    setContent(createContent());
  }, []);

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