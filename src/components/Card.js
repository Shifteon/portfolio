import "./Card.scss";

function Card({image, title, content, links}) {

  return (
    <div className="card">
      <img src={image} alt="project" />
      <div className="card-content">
        <h2>{title}</h2>
        <p>{content}</p>
        <div className="links">
          {links.map(link => <a href={link.href} target="_blank" rel="noreferrer" >{link.text}</a> )}
        </div>
      </div>
    </div>
  );
}

export default Card;