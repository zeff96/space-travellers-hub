import Rocket from "./Rocket";
import "./Rockets.scss";
import { useSelector, useDispatch } from "react-redux";
import { getRocketsAsync } from "../store/rocket/rocketSlice";
import { useEffect } from "react";

export default function Rockets() {
  const { rockets, isLoading, error } = useSelector((state) => state.rockets);

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
      {isLoading && <h2 className="loading">Loading...</h2>}
      {error && <p className="error">{error}</p>}
      <ul className="rocket-list">{listRockets}</ul>
    </div>
  );
}
