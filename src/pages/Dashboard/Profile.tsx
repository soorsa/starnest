import ProfileSummary from "../../components/DashboardComponents/ProfileSummary";
import UpdateProfile from "../../components/DashboardComponents/UpdateProfile";
import { useGetUserByID } from "../../hooks/querys/useUsers";
import { useUserState } from "../../zustand/user.state";

const Profile = () => {
  const { user } = useUserState();
  const { data, isLoading, isError } = useGetUserByID(user?.id);
  return (
    <div className="grid md:grid-cols-3 gap-4">
      <ProfileSummary data={data} isError={isError} isLoading={isLoading} />
      <UpdateProfile user={user} isError={isError} isLoading={isLoading} />
    </div>
  );
};

export default Profile;
