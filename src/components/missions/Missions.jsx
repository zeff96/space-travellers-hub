import { useSelector, useDispatch } from "react-redux";
import { fetchMissions, missionStatus } from "../../store/missions/missionSlice";
import { useEffect } from "react";
import './missions.scss';

const Missions = () => {
  const { missions, isLoading, error } = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMissions());
  }, [dispatch]);
  return (
    <div className="container-fluid d-none d-md-block">
      <table className="table table-bordered table-striped container border mt-5 mb-5">
        <tbody>
          <tr>
            <th>Mission</th>
            <th>Description</th>
            <th>Status</th>
            <th className="text-white">{' '}</th>
          </tr>
          {missions.map((mission) => (
            <tr key={mission.id}>
              <td className="col-md-1">{mission.name}</td>
              <td className="col-md-4 description">{mission.description}</td>
              <td className="align-middle col-md-1 text-center">
                <span className={mission.joined ? 'member' : 'not-member '}>
                  {mission.joined ? 'Active Member' : 'NOT A MEMBER'}
                  {' '}
                </span>
              </td>
              <td className={`align-middle col-md-1 text-center ${mission.joined && 'btn-active'}`}>
                {' '}
                <button
                  type="button"
                  className={`btn ${mission.joined ? 'btn-outline-danger' : 'btn-outline-secondary'}`}
                  onClick={() => dispatch(missionStatus(mission))}
                >
                  {mission.joined ? 'Leave Mission' : 'Join Mission'}
                </button>
              </td>
          </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Missions