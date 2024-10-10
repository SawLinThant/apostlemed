import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "~/components/ui/tooltip";
import { useAccount } from "~/lib/context/account-context";

const UserProfile = () => {
  const router = useRouter();
  const { data } = useSession();

  return (
    <div className="flex w-full flex-col items-center rounded-t">
      <div className="flex w-full flex-col items-center rounded-t">
        <div className="relative h-[8rem] w-full rounded-t-md border-b bg-gray-800">
          <div className="absolute bottom-[-1px] right-[1.5rem] lg:right-[5.5rem] z-0 h-[60px] w-[120px] translate-y-[3.7rem] rotate-[-180deg] transform rounded-t-full border-l border-r border-t border-gray-800 bg-gray-800"></div>
        </div>
        <div className="flex w-full flex-row items-center lg:justify-end justify-between">
          <div className="lg:mr-8 mt-2 flex h-full lg:flex-row flex-col ml-4 md:ml-12 items-start gap-1 lg:gap-4">
            <div className="flex flex-row items-center gap-2">
              <p className="text-lg font-bold">1.2k</p>
              <span className="text-gray-500">Followers</span>
            </div>
            <div className="flex flex-row items-center gap-2">
              <p className="text-lg font-bold">3k</p>
              <span className="text-gray-500">Followings</span>
            </div>
          </div>
          <div className="z-10 mr-[2.1rem] lg:mr-[6.1rem] flex h-[100px] w-[100px] translate-y-[-3.2rem] flex-col items-center justify-center rounded-full bg-theme">
            <span className="text-[35px] text-white">
              {data?.user.name?.charAt(0)}
            </span>
          </div>
        </div>
        <div className="flex w-full flex-col gap-4 md:px[4rem] px-4 md:px-10 lg:px-[5rem]">
          <h2 className="w-full translate-y-[-1.5rem] text-right text-xl font-extrabold">
            {data?.user.name}
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla neque
            veniam minus? Quos fugiat voluptate alias, expedita, veritatis, sunt
            corrupti distinctio cum reprehenderit officia molestiae beatae. Odio
            earum ut itaque.
          </p>
          <div className="flex w-full md:flex-row flex-col lg:flex-row md:items-center items-end lg:items-center justify-start gap-4">
            <div className="flex flex-row items-start lg:items-center gap-1 cursor-pointer hover:underline text-blue-500">
              <FaEdit />
              <div>Edit Your Profile</div>
            </div>
            <div
             onClick={() => router.push("/app/profile/additional-data")}
            className="flex flex-row items-start lg:items-center gap-1 text-blue-500 cursor-pointer hover:underline">
              <MdOutlineIncompleteCircle />
              <div>Complete Your Profile</div>
            </div>
          </div>
          <div className="grid w-full rounded-xl bg-gray-200 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-4">
            <div className="flex w-full flex-col gap-8 lg:border-r border-gray-800 p-3">
              <div className="flex flex-row items-center gap-2">
                <MdEmail size={20} />
                <div>{data?.user.email}</div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <MdEmail size={20} />
                <div>{data?.user.email}</div>
              </div>
              <div className="flex flex-row items-center gap-2">
                <MdEmail size={20} />
                <div>{data?.user.email}</div>
              </div>
            </div>
            <div className="flex w-full flex-col border-gray-800 lg:border-r p-3">
              <div className="flex flex-row items-center gap-2">
                <MdEmail size={20} />
                <div>{data?.user.email}</div>
              </div>
            </div>
            <div className="flex w-full flex-col border-gray-800 md:border-r lg:border-none p-3">
              <div className="flex flex-row items-center gap-2">
                <MdEmail size={20} />
                <div> Member since 24th October 2024</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
