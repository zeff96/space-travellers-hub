import { useSelector } from "react-redux";
import PropTypes from "prop-types";

function ReservedRocket({ rocket }) {
  return <>{rocket.rocket_name}</>;
}

export default function ReservedRockets() {
  const rockets = useSelector((state) =>
    state.rockets.rockets.filter((rocket) => rocket.reserved === true)
  );

  const listRockets = rockets.map((rocket) => (
    <li key={rocket.id} className="list-group-item">
      <ReservedRocket rocket={rocket} />
    </li>
  ));

  return <ul className="list-unstyled list-group">{listRockets}</ul>;
}

ReservedRocket.propTypes = {
  rocket: PropTypes.shape({
    rocket_name: PropTypes.string,
  }).isRequired,
};
