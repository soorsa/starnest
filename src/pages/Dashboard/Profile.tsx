import ProfileSummary from "../../components/DashboardComponents/ProfileSummary";
import UpdateProfile from "../../components/DashboardComponents/UpdateProfile";

const Profile = () => {
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <ProfileSummary />
      <UpdateProfile />
    </div>
  );
};

export default Profile;
