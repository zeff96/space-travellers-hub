import { useState } from "react";
import "./Rocket.scss";
export default function Rocket({ rocket }) {
  const [reserve, setReserve] = useState(true);
  return (
    <div className="rocket_wrapper">
      <img className="img" src={rocket.flickr_images[0]} alt={rocket.name} />
      <div>
        <h3 className="name">{rocket.rocket_name}</h3>
        <p className="description">{rocket.description}</p>
        <button
          className={reserve ? "reserve-btn" : "cancel-reserve-btn"}
          type="button"
          onClick={() => {
            setReserve(!reserve);
          }}
        >
          {reserve ? "Reserve Rocket" : "Cancel Reservation"}
        </button>
      </div>
    </div>
  );
}
