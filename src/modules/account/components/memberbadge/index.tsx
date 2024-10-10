import React from "react";
import { RiPoliceBadgeFill } from "react-icons/ri";
import HistoryLog from "~/modules/common/components/history-log";
import { DummyLog } from "~/modules/common/components/history-log/dummylog";

const Memberbadge: React.FC = () => {
  return (
    <div className="grid h-full w-full grid-cols-1 p-4 lg:grid-cols-2 lg:p-16">
      <div className="flex w-full flex-col gap-2 p-4">
        <h2 className="text-xl font-bold">Current Point</h2>
        <div className="flex flex-col lg:items-start items-center gap-3">
          <div className="flex h-20 w-full lg:w-60 items-center justify-center rounded-md border-2 border-gray-800">
            <p className="text-lg font-extrabold text-gray-500">120000</p>
          </div>
          <div className="flex flex-col items-center gap-2 lg:w-60 w-full">
            <p className="text-center hover:cursor-pointer hover:text-white p-3 w-full text-texttheme rounded-md bg-theme">
              Transfer Point
            </p>
            <p className="text-center hover:cursor-pointer hover:text-white p-3 w-full text-texttheme rounded-md bg-theme">
              Receive Point
            </p>
          </div>
        </div>
        <div className="mt-4 flex flex-col gap-4">
          <h2 className="text-xl font-bold">Member Badges</h2>
          <div className="flex flex-row items-center gap-4">
            <RiPoliceBadgeFill color="green" size={25} />
            <RiPoliceBadgeFill color="green" size={25} />
            <RiPoliceBadgeFill color="green" size={25} />
            <div className="text-blue-500">. . . Earn more</div>
          </div>
        </div>
      </div>
      <HistoryLog Log={DummyLog}/>
    </div>
  );
};
export default Memberbadge;
