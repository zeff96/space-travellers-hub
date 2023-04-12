import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { addReserve, cancelReservation } from '../../redux/rocket/rocketSlice';

export default function Rocket({ rocket }) {
  const dispatch = useDispatch();

  return (
    <div className="row mb-3">
      <div className="col-md-6 col-lg-4">
        <img
          className="img-fluid"
          src={rocket.flickr_images[0]}
          alt={rocket.rocket_name}
        />
      </div>
      <div className="col-md-6 col-lg-8">
        <h3 className="name">{rocket.rocket_name}</h3>
        <p className="description">
          {rocket.reserved && (
            <span className="badge rounded-pill text-bg-success me-1">
              Reserved
            </span>
          )}
          {rocket.description}
        </p>
        {rocket.reserved && (
          <button
            type="button"
            className="btn btn-outline-secondary btn-lg"
            onClick={() => dispatch(cancelReservation(rocket.id))}
            data-testid="cancel"
          >
            Cancel Reservation
          </button>
        )}
        {!rocket.reserved && (
          <button
            type="button"
            className="btn btn-primary btn-lg"
            onClick={() => dispatch(addReserve(rocket.id))}
            data-testid="reserve"
          >
            Reserve Rocket
          </button>
        )}
      </div>
    </div>
  );
}

Rocket.propTypes = {
  rocket: PropTypes.shape({
    id: PropTypes.string,
    rocket_name: PropTypes.string,
    description: PropTypes.string,
    reserved: PropTypes.bool,
    flickr_images: PropTypes.string,
  }).isRequired,
};
