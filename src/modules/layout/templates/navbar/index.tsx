import React from "react";
import ProfileDropdown from "../../components/profile-dropdown";
import MobileNav from "../../components/mobilenav";

const Navbar: React.FC = () => {
  return (
    <div className="h-24 md:w-full w-full lg:w-[79vw] pb-3 fixed z-30 ">
      <div className="flex h-full w-full bg-white border-b-2 flex-row items-center justify-end px-6 ">
        <div className="hidden md:hidden lg:block">
          <ProfileDropdown />
        </div>
        <div className="block md:block lg:hidden">
          <MobileNav />
        </div>
      </div>
    </div>
  );
};
export default Navbar;
