import "./Card.css";
import img from "./Empty_set.svg";
function Card(props) {
  return (
    <div className=" Card">
      <div className="Card_front">
        <div className="div-1">
          <img src={props.image} alt="./gradient-dynamic-blue-lines-background/5559852.jpg" />
        </div>
        <div className="div_2">
          <h2 className="heading">{props.heading}</h2>
        </div>
      </div>
      <div className="Card_back">
        <p className="paragraph">{props.paragraph}</p>
        <a href="/">Read More</a>
      </div>
    </div>
  );
}
export default Card;

Card.defaultProps = {
  heading: "Null",
  paragraph: "Null",
  image: img,
};
