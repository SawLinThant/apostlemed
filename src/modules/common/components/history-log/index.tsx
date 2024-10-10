import { BsThreeDots } from "react-icons/bs";

type LogInfo = {
  id: string;
  date: string;
  point: number;
  transfer: string;
  receive: string;
};

type HistoryLogprops = {
  Log: LogInfo[];
};

const HistoryLog = ({ Log }: HistoryLogprops) => {
  return (
    <div className="h-full w-full p-4">
      <div className="flex h-full w-full flex-col justify-start rounded-md">
        <div className="flex h-16 p-4 w-full flex-row items-center justify-start rounded-t-md bg-theme">
          <h2 className="text-lg font-bold">Point History</h2>
        </div>
        <div className="flex h-full w-full flex-col items-center overflow-auto border-2 border-gray-500 p-4">
          {Log.map((log) => (
            <div key={log.id} className="grid min-h-16 w-full grid-cols-7 py-3 border-b border-gray-500">
              <div className="col-span-6 flex flex-col">
                <p className="font-semibold text-lg text-texttheme flex flex-row items-center gap-2">{log.point} <span className="text-sm text-theme">pts</span></p>
                <p className="font-medium text-sm text-gray-500">{log.date}</p>
                <p className="font-meduim text-sm text-gray-500">{log.transfer} to {log.receive}</p>
              </div>
              <div className="col-span-1 flex flex-row justify-end items-start">
             <div className="cursor-pointer"><BsThreeDots size={15}/></div> 
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HistoryLog;
