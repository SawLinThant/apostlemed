import clsx from "clsx";
import Image from "next/image";
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
        <div className={clsx(" md:hidden max-h-screen h-screen border-r transition-all text-white duration-200 hidden bg-gray-800 lg:flex lg:flex-col gap-4 lg:items-center p-4",{
            "lg:w-[20vw]":!collapse,
            "lg:w-[7vw]":collapse
        })}>
            <div className={clsx("w-full h-12 flex flex-row",{
                "justify-center":collapse,
                "justify-end":!collapse
            })}>
                <div className="rounded-full px-4 flex items-center justify-center bg-white" onClick={() => toggleCollapse(!collapse)}>
                <ChevronDown color="black" className={clsx("transition-all duration-500",{
                    "rotate-[270deg]":!collapse,
                    "rotate-[90deg]":collapse
                })}/>
                </div>
                
            </div>
            <div className="w-full px-4 py-6 border-b border-white flex flex-col gap-3">
                    <div className="w-full flex items-center justify-center">
                        <div className={clsx("flex items-center  bg-white justify-center rounded-full overflow-hidden",{
                            "w-20 h-20":!collapse,
                            "w-10 h-10":collapse,
                        })}>
                            <Image width={90} height={90} src="/logo.jpg" alt="logo"/>
                        </div>
                    </div>
                </div>
            <div className={("w-full h-full mt-2")}>
                {routes.map((route) =>(
                    <div className="group hover:cursor-pointer flex flex-col items-center gap-4" onClick={()=>{router.push(route.path)}}>
                    <div className={clsx("w-full min-h-6 flex flex-row items-center p-2 gap-2 rounded  group-hover:bg-theme group-hover:text-white",{
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