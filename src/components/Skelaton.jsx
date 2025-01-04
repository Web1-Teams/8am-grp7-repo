import "./Skelaton.css";

const Skelaton = (props) => {
  return (
    <div className="skeleton-container">
      <img src={props.src} alt="img " className="img" />
      <p className="paragraph">{props.paragraph}</p>
      <a href={props.link} className="btn">
        {props.game}
      </a>
    </div>
  );
};
export default Skelaton;