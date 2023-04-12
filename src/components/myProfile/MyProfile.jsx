import "./myProfile.scss";
import ReservedRockets from "../Rockets/Reserved";
import MissionsJoined from "../missions/Joined";

const MyProfile = () => {
  return (
    <div className="container row">
      <div className="col-6">
        <h1>My Missions</h1>
        <MissionsJoined />
      </div>

      <div className="col-6">
        <h1>My Rockets</h1>
        <ReservedRockets />
      </div>
    </div>
  );
};

export default MyProfile;
