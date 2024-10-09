import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React from "react";
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
  console.log(data);
  return (
    <div className="flex w-full flex-col items-center">
      <div className="mt-[40px] flex w-full flex-col items-center rounded-[5px] border-[1px] px-[20px] py-[20px] shadow-lg sm:w-[500px]">
        <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-blue-500">
          <span className="text-[35px] text-white">{data?.user.name?.charAt(0)}</span>
        </div>
        <div className="flex w-full flex-col items-center justify-center">
          <span className="text-[20px] font-semibold">{data?.user.name}</span>
          <span className="text-[12px] font-semibold text-gray-400">
            Member since 24th October 2024
          </span>
        </div>
        <div className="mt-[50px] flex w-full rounded-[5px] border-[1px] bg-[#fbf9f6] shadow-sm sm:w-full">
          <div className="grid w-full grid-cols-2 grid-rows-2 p-[20px]  flex-wrap">
            <div>Email</div>
            <div className=" line-clamp-1">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger>{data?.user?.email}</TooltipTrigger>
                  <TooltipContent>
                    <p>{data?.user?.email}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>
            <div>Phone</div>
            <div>{data?.user?.phone}</div>
          </div>
        </div>
        <div className="mt-[30px]">
          <button
            className="rounded-[5px] border-[1px] bg-blue-700 p-[10px] text-white"
            onClick={() => router.push("/app/profile/additional-data")}
          >
            Edit Additional Data
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
