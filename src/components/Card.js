import "./Card.scss";

function Card({image, title, content}) {

  return (
    <div className="card">
      <img src={image} />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{content}</p>
      </div>
    </div>
  );
}

export default Card;