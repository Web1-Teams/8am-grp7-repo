import "./Card.css";
const Card = (props) => {
  return (
    <div className="card-container">
      <img src={props.imgsrc} alt="card img " className="card-img" />

      <h2 className="card-title">{props.title}</h2>
      <h6 className="card.description"> {props.description} </h6>
      <a href={props.link} className="card-btn">
        {"Let's start"}
      </a>
    </div>
  );
};
export default Card;