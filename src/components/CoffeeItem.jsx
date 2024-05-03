import starNofill from ".././assets/images/Star.svg";
import starFill from ".././assets/images/Star_fill.svg";

export default function CoffeeItem(props) {
  const star = props.data.rating == null ? starNofill : starFill;

  return (
    <div className="card">
      <div className="card--image-box">
        {props.data.popular && <div className="card--popular">Popular</div>}
        <img
          className="card--image"
          src={props.data.image}
          alt={props.data.name}
        />
      </div>
      <div className="card--header">
        <div className="card--title">{props.data.name}</div>
        <div className="card--price">{props.data.price}</div>
      </div>
      <div className="card--stats">
        <button className="card--star">
          <img src={star} alt="star" />
        </button>
        {props.data.rating == null ? (
          <div className="card--votes">No ratings</div>
        ) : (
          <div className="card--points">{props.data.rating}</div>
        )}
        {props.data.votes != 0 ? (
          <div className="card--votes">({props.data.votes})</div>
        ) : (
          ""
        )}
        {!props.data.available && <div className="card--sold">Sold out</div>}
      </div>
    </div>
  );
}
