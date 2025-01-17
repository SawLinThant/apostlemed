import React from "react";
import { useAccount } from "~/lib/context/account-context";
import Profile from "~/modules/common/icons/profile";
import Signout from "~/modules/common/icons/sign-out";
import { BsFillPersonFill } from "react-icons/bs";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";

const ProfileDropdown: React.FC = () => {
    const {handleLogout} = useAccount();
    const router = useRouter();
    const { data } = useSession();
  return (
    <div className="relative min-h-12 min-w-10 group">
      <div className="flex h-full w-full items-center justify-center p-3">
      <BsFillPersonFill size={30}/>
      </div>
      <div className="absolute pointer-events-none group-hover:pointer-events-auto right-0 top-[3.25rem] z-20 min-h-[5rem] min-w-[20rem] rounded-md border-2 border-gray-500 bg-gray-50 p-4 opacity-0 transition-all duration-700 group-hover:opacity-100">
        <div className="flex h-full w-full flex-col items-center gap-4">
          <div className="flex w-full flex-col items-center gap-2 border-b-2 border-gray-400 pb-4">
            <div className="flex h-16 w-16 items-center justify-center rounded-full border bg-theme p-3 text-white">
              <div>{data?.user.name?.charAt(0)}</div>
            </div>
            <div>{data?.user?.email}</div>
            <div className="flex flex-row items-center gap-3">
              <div>Role</div>
              <span>-</span>
              <div>{data?.user?.userType}</div>
            </div>
          </div>
          <div className="flex w-full flex-col justify-center gap-3 rounded-md bg-gray-200 p-4">
            <div 
            onClick={() => router.push('/app/profile')}
            className="flex h-full cursor-pointer hover:text-theme w-full flex-row items-center gap-3">
              <Profile color="black" />
              <div>Profile Detail</div>
            </div>
            <div onClick={handleLogout} className="flex h-full cursor-pointer hover:text-theme w-full flex-row items-center gap-3">
              <Signout color="black" />
              <div>SignOut</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProfileDropdown;
