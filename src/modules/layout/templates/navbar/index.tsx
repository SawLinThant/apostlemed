import React from "react";
import ProfileDropdown from "../../components/profile-dropdown";

const Navbar:React.FC = () => {
    return(
      <div className="w-full h-24 border-b">
        <div className="w-full h-full py-3 px-6 flex flex-row items-center justify-end">
            <div><ProfileDropdown/></div>
            
        </div>
      </div>
    )
} 
export default Navbar;