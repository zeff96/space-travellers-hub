import { useSelector } from "react-redux";

function ReservedRocket({ rocket }) {
  return <p>{rocket.rocket_name}</p>;
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