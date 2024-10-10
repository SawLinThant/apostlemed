import React from "react";

const CollectionCard = () => {
  return (
    <div className="flex relative h-[150px] w-full flex-col items-center rounded-[10px] bg-[#3c3b43] border-2 shadow-md px-[20px] py-[20px]">
      <div className="flex w-full flex-col justify-start ">
        <span className="text-[20px] font-semibold text-white">
          Collection Name
        </span>
        <span className="font-serif text-[12px] text-theme">
          Collection Data 
        </span>
        <span className="font-serif text-[12px] text-theme">
          Collection Data
        </span>
        
      </div>
      <div className="absolute bottom-4 mt-[15px] flex w-full items-center justify-center">
          <button className="border-[1px] p-[3px] w-[200px] rounded-[5px] bg-theme text-white">View Detail</button>
        </div>
    </div>
  );
};

export default CollectionCard;
