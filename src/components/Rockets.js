import Rocket from "./Rocket";
import { useSelector, useDispatch } from "react-redux";
import { getRocketsAsync, selectedRockets } from "../store/rocket/rocketSlice";
import { useEffect } from "react";

export default function Rockets() {
  const rockets = useSelector(selectedRockets);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getRocketsAsync());
  }, [dispatch]);

  const listRockets = rockets.map((rocket) => (
    <li key={rocket.id}>
      <Rocket rocket={rocket} />
    </li>
  ));

  return <ul>{listRockets}</ul>;
}
