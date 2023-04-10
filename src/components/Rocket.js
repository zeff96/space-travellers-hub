export default function Rocket({ rocket }) {
  return (
    <div>
      <img src={rocket.flickr_images[0]} alt={rocket.name} />
      <h3>{rocket.name}</h3>
      <p>{rocket.description}</p>
      <button type="button">Reserve Rocket</button>
    </div>
  );
}
