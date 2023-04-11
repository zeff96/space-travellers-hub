import { useSelector } from "react-redux";

function MissionJoined({ mission }) {
  return <p>{mission.name}</p>;
}

export default function MissionsJoined() {
  const missions = useSelector((state) =>
    state.missions.mission.filter((mission) => mission.joined === true)
  );

  const listMissions = missions.map((mission) => (
    <li key={mission.id}>
      <MissionJoined mission={mission} />
    </li>
  ));

  return <ul>{listMissions}</ul>;
}