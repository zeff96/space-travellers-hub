export default function Rocket({ rocket }) {
  return (
    <div>
      <img className="img" src={rocket.flickr_images[0]} alt={rocket.name} />
      <h3 className="name">{rocket.name}</h3>
      <p className="description">{rocket.description}</p>
      <button className="reverse-btn" type="button">
        Reserve Rocket
      </button>
    </div>
  );
}
