import clsx from "clsx";
import { useState } from "react";
import { memberRoutes, opsRoutes } from "~/lib/config";
import { useAccount } from "~/lib/context/account-context";
import ChevronDown from "~/modules/common/icons/chevron-down";
import { VscThreeBars } from "react-icons/vsc";
import Profile from "~/modules/common/icons/profile";
import Signout from "~/modules/common/icons/sign-out";
import { IoCloseSharp } from "react-icons/io5";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const { member: userdata, handleLogout } = useAccount();
  const routes = userdata?.userType === "Ops" ? opsRoutes : memberRoutes;
  return (
    <div className="relative min-h-10 min-w-10">
      <button className="" onClick={() => setIsOpen(true)}>
        <VscThreeBars size={25} />
      </button>
      <div
        className={clsx(
          "absolute right-0 top-[-1.5rem] z-10 flex h-screen w-screen flex-col gap-4 border-r bg-white p-4 transition-all duration-500",
          {
            "translate-x-[-200%]": !isOpen,
            "translate-x-[5%] md:translate-x-[3%]": isOpen,
          },
        )}
      >
        <div className="border-b-2 px-2 border-black py-4">
          <button
            className="flex w-full flex-row items-center justify-end"
            onClick={() => setIsOpen(false)}
          >
            <IoCloseSharp size={25}/>
          </button>
        </div>
        <div className="flex w-full flex-col items-center gap-3 rounded-md border-2 border-theme p-4">
          <div className="flex w-full flex-col items-center gap-2 border-b-2 border-black pb-4">
            <div className="flex h-32 w-32 items-center justify-center rounded-full border bg-theme p-3 text-white">
              <h2 className="font-extrabold text-3xl">J</h2>
            </div>
            <div className="font-bold">user@gmailcom</div>
            <div className="flex flex-row items-center gap-3 font-bold">
              <div>Role</div>
              <span>-</span>
              <div>Admin</div>
            </div>
          </div>
          <div className="flex w-full flex-col justify-center gap-3 rounded-md text-white bg-theme p-4">
            <div className="flex h-full  cursor-pointer w-full flex-row items-center gap-3">
              <Profile color="white" />
              <div>Profile Detail</div>
            </div>
            <div onClick={handleLogout} className="flex h-full cursor-pointer w-full flex-row items-center gap-3">
              <Signout color="white" />
              <div>SignOut</div>
            </div>
          </div>
        </div>
        <div className="text-texttheme h-full w-full rounded-md p-8 text-lg font-bold">
          <div className="flex h-full w-full flex-col gap-4 rounded-md">
            {routes.map((route) => (
              <div className="group flex flex-col items-center gap-4">
                <div
                  className={clsx(
                    "group-hover:text-texttheme border-b border-primary flex min-h-6 w-full flex-row items-center justify-between gap-2 rounded-md p-3 group-hover:bg-primary",
                    {},
                  )}
                  key={route.id}
                >
                  <div className="flex flex-row items-center gap-3">
                    <div>{route.icon}</div>
                    <div className={clsx("transition-all duration-500", {})}>
                      {route.label}
                    </div>
                  </div>
                  <div className="rotate-[-90deg]">
                    <ChevronDown size={25} height={25} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileNav;
