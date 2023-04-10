import "./Rocket.scss";
export default function Rocket({ rocket }) {
  return (
    <div className="rocket_wrapper">
      <img className="img" src={rocket.flickr_images[0]} alt={rocket.name} />
      <div>
        <h3 className="name">{rocket.name}</h3>
        <p className="description">{rocket.description}</p>
        <button className="reserve-btn" type="button">
          Reserve Rocket
        </button>
      </div>
    </div>
  );
}
