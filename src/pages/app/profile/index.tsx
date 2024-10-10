import { ReactElement } from "react";
import ProfileForm from "~/modules/common/components/Profile/ProfileForm";
import UserProfile from "~/modules/common/components/Profile/UserProfile";

import Layout from "~/modules/layout/templates";
import { NextPageWithLayout } from "~/types/global";

const Profile: NextPageWithLayout = () => {
  return (
    <div className="flex w-full">
      <UserProfile/>
    </div>
  );
};

Profile.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default Profile;
