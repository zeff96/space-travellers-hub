import "./Rocket.scss";
import { toggleReserve } from "../store/rocket/rocketSlice";
import { useDispatch } from "react-redux";

export default function Rocket({ rocket }) {
  const dispatch = useDispatch();

  return (
    <div className="rocket_wrapper">
      <img className="img" src={rocket.flickr_images[0]} alt={rocket.name} />
      <div>
        <h3 className="name">{rocket.rocket_name}</h3>
        <p className="description">
          {rocket.reserved && <span className="reserve-badge">reserved</span>}
          {rocket.description}
        </p>
        <button
          className={rocket.reserved ? "cancel-reserve-btn" : "reserve-btn"}
          type="button"
          onClick={() => {
            dispatch(toggleReserve(rocket.id));
          }}
        >
          {!rocket.reserved ? "Reserve Rocket" : "Cancel Reservation"}
        </button>
      </div>
    </div>
  );
}
