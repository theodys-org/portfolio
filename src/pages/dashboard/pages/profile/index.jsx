import { useOutletContext } from "react-router-dom";

const Profile = () => {
  const [profile] = useOutletContext();
  console.log("🚀 ~ Profile ~ profile:", profile);
  return <div>Profile</div>;
};

export default Profile;
