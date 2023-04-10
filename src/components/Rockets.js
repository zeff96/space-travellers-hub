import Rocket from "./Rocket";
import { useSelector, useDispatch } from "react-redux";
import {
  getRocketsAsync,
  selectedRockets,
  loading,
  errorMessage,
} from "../store/rocket/rocketSlice";
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

  return (
    <div>
      {loading && <h2>Loading...</h2>}
      {errorMessage && <p>{errorMessage}</p>}
      <ul>{listRockets}</ul>
    </div>
  );
}
