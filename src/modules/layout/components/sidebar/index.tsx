import clsx from "clsx";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { memberRoutes, opsRoutes } from "~/lib/config";
import { useAccount } from "~/lib/context/account-context";
import ChevronDown from "~/modules/common/icons/chevron-down";

const Sidebar:React.FC = () => {
    const [collapse, toggleCollapse] = useState(false);
    const { member: userdata } = useAccount();
    const routes = userdata?.userType === "Ops"? opsRoutes:memberRoutes;
    const router=useRouter();
    return(
        <div className={clsx(" md:hidden max-h-screen h-screen border-r transition-all duration-500 hidden border-gray-600 lg:flex lg:flex-col lg:items-center p-4",{
            "lg:w-[15vw]":!collapse,
            "lg:w-[7vw]":collapse
        })}>
            <div className={clsx("w-full h-12 flex flex-row",{
                "justify-center":collapse,
                "justify-end":!collapse
            })}>
                <div className="rounded-full px-4 flex items-center justify-center border" onClick={() => toggleCollapse(!collapse)}>
                <ChevronDown className={clsx("transition-all duration-500",{
                    "rotate-[270deg]":!collapse,
                    "rotate-[90deg]":collapse
                })}/>
                </div>
              
            </div>
            <div className={("w-full h-full mt-8")}>
                {routes.map((route) =>(
                    <div className="group hover:cursor-pointer flex flex-col items-center gap-4" onClick={()=>{router.push(route.path)}}>
                    <div className={clsx("w-full min-h-6 flex flex-row items-center p-2 gap-2 rounded  group-hover:bg-primary group-hover:text-white",{
                        "justify-start":!collapse,
                        "justify-center":collapse
                    })} key={route.id}>
                        <div>{route.icon}</div>
                        <div className={clsx("transition-all duration-500",{
                            "hidden":collapse,
                            "block":!collapse
                        })}>{route.label}</div>
                    </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
export default Sidebar;