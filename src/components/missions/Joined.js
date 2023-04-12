import { useSelector } from "react-redux";
import PropTypes from "prop-types";

function MissionJoined({ mission }) {
  return <>{mission.name}</>;
}

export default function MissionsJoined() {
  const missions = useSelector((state) =>
    state.missions.missions.filter((mission) => mission.joined === true)
  );

  const listMissions = missions.map((mission) => (
    <li key={mission.id} className="list-group-item">
      <MissionJoined mission={mission} />
    </li>
  ));

  return <ul className="list-unstyled list-group">{listMissions}</ul>;
}

MissionJoined.propTypes = {
  mission: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
