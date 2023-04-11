import "./myProfile.scss";
import ReservedRockets from "../Rockets/Reserved";

const MyProfile = () => {
  return (
    <div className="container row">
      <div className="col-6">
        <h1>My Missions</h1>
      </div>

      <div className="col-6">
        <h1>My Rockets</h1>
        <ReservedRockets />
      </div>
    </div>
  );
};

export default MyProfile;
