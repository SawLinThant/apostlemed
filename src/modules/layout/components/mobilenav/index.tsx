import clsx from "clsx";
import { useState } from "react"

const MobileNav = () => {
    const [isOpen,setIsOpen] = useState<boolean>(false);
    return(
        <div className="min-w-10 min-h-10 relative">
            <button className="" onClick={() => setIsOpen(true)}>Menu</button>
            <div className={clsx("absolute z-10 w-screen top-[-1.5rem] transition-all duration-500 h-screen border-r p-4 bg-gray-400 flex flex-col",{
                "translate-x-[-200%]":!isOpen,
                "translate-x-[-94%]":isOpen
            })}>
                <div className="py-4 border-b"><button className="w-full flex flex-row items-center justify-end" onClick={() =>setIsOpen(false)}>Close</button></div>
            </div>
        </div>
    )
}
export default MobileNav