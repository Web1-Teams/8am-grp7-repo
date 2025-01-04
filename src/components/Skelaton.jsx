import "./Skelaton.css";

const Skelaton = (props) => {
  return (
    <div className="col-6">
     <div className="skeleton-container">
       <img src={props.src} alt="img " className="img" />
       <p className="paragraph">{props.paragraph}</p>
       <a href={props.link} className="btn">
         {props.game}
       </a>
     </div>
     </div>
  );
};
export default Skelaton;