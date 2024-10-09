import React from "react";
import ProfileDropdown from "../../components/profile-dropdown";
import MobileNav from "../../components/mobilenav";

const Navbar: React.FC = () => {
  return (
    <div className="h-24 w-full">
      <div className="flex h-full w-full flex-row items-center justify-end px-6 py-3">
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
