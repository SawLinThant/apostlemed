import clsx from "clsx";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { memberRoutes, opsRoutes } from "~/lib/config";
import { useAccount } from "~/lib/context/account-context";
import ChevronDown from "~/modules/common/icons/chevron-down";

const Sidebar: React.FC = () => {
  const [collapse, toggleCollapse] = useState(false);
  const { member: userdata } = useAccount();
  const routes = userdata?.userType === "Ops" ? opsRoutes : memberRoutes;
  const router = useRouter();
  return (
    <div
      className={clsx(
        "hidden h-screen max-h-screen gap-4 border-r bg-gray-800 p-4 text-white transition-all duration-200 md:hidden lg:flex lg:flex-col lg:items-center",
        {
          "lg:w-[20vw]": !collapse,
          "lg:w-[7vw]": collapse,
        },
      )}
    >
      <div
        className={clsx("flex h-12 w-full flex-row", {
          "justify-center": collapse,
          "justify-end": !collapse,
        })}
      >
        <div
          className="flex items-center justify-center rounded-full bg-white px-4"
          onClick={() => toggleCollapse(!collapse)}
        >
          <ChevronDown
            color="black"
            className={clsx("transition-all duration-500", {
              "rotate-[270deg]": !collapse,
              "rotate-[90deg]": collapse,
            })}
          />
        </div>
      </div>
      <div className="flex w-full flex-col gap-3 border-b border-white px-4 py-6">
        <div className="flex w-full items-center justify-center">
          <div
            className={clsx(
              "flex items-center justify-center overflow-hidden rounded-full bg-white",
              {
                "h-20 w-20": !collapse,
                "h-10 w-10": collapse,
              },
            )}
          >
            <Image width={90} height={90} src="/logo.jpg" alt="logo" />
          </div>
        </div>
      </div>
      <div className={"mt-2 h-full w-full"}>
        {routes.map((route, index) => (
          <div
            className="group flex flex-col items-center gap-4 hover:cursor-pointer"
            onClick={() => {
              router.push(route.path);
            }}
            key={index + route.id}
          >
            <div
              className={clsx(
                "flex min-h-6 w-full flex-row items-center gap-2 rounded p-2 group-hover:bg-theme group-hover:text-white",
                {
                  "justify-start": !collapse,
                  "justify-center": collapse,
                },
              )}
              key={route.id}
            >
              <div>{route.icon}</div>
              <div
                className={clsx("transition-all duration-500", {
                  hidden: collapse,
                  block: !collapse,
                })}
              >
                {route.label}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Sidebar;
