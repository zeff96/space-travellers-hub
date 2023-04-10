import Rocket from "./Rocket";

export default function Rockets() {
  const listRockets = rockets.map((rocket) => (
    <li key={rocket.id}>
      <Rocket rocket={rocket} />
    </li>
  ));

  return <ul>{listRockets}</ul>;
}
