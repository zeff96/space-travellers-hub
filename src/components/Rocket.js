import "./Rocket.scss";
import { addReserve, cancelReservation } from "../store/rocket/rocketSlice";
import { useDispatch } from "react-redux";

export default function Rocket({ rocket }) {
  const dispatch = useDispatch();

  return (
    <div className="rocket_wrapper">
      <img className="img" src={rocket.flickr_images[0]} alt={rocket.name} />
      <div className="rocket-details">
        <h3 className="name">{rocket.rocket_name}</h3>
        <p className="description">
          {rocket.reserved && <span className="reserve-badge">reserved</span>}
          {rocket.description}
        </p>
        {rocket.reserved && (
          <button
            className="cancel-reserve-btn"
            onClick={() => dispatch(cancelReservation(rocket.id))}
          >
            Cancel Reservation
          </button>
        )}
        {!rocket.reserved && (
          <button
            className="reserve-btn"
            onClick={() => dispatch(addReserve(rocket.id))}
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
}
