import React from "react";
import CollectionCard from "./CollectionCard";
import { useRouter } from "next/router";

const CollectionListComponent = () => {
    const router=useRouter()
  return (
    <div className="flex w-full flex-col items-center gap-x-2 gap-y-2">
      <div className="flex w-full items-center flex-col sm:flex-row justify-start mt-[30px] pb-[20px] border-b-2 gap-x-5 gap-y-2">
        <div className="flex-shrink-0">
            <span>Collection List</span>
        </div>
        <div className="flex w-[200px] border-2 border-black h-[40px] items-center gap-x-1 rounded-[5px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg>
          <input className="flex w-full border-0 focus:outline-none" placeholder="search collection"/>
        </div>
        <div className="flex w-full justify-center sm:justify-end sm:pr-[50px]">
            <button className="flex  items-center justify-center p-[5px] border-[1px] bg-green-400 w-[200px] h-[50px] rounded-[5px]" onClick={()=>router.push('/app/collection')}>
                Create New Collection
            </button>
        </div>
      </div>
      <div className="flex w-full flex-row flex-wrap mt-[40px] gap-x-10 gap-y-10 items-center justify-center px-[30px]">
        <div className="flex w-full sm:w-[300px]">
          <CollectionCard />
        </div>
        <div className="flex w-full sm:w-[300px]">
          <CollectionCard />
        </div>
        <div className="flex w-full sm:w-[300px]">
          <CollectionCard />
        </div>
      </div>
    </div>
  );
};

export default CollectionListComponent;
