import React from "react";
import CollectionCard from "./CollectionCard";
import { useRouter } from "next/router";
import { useAccount } from "~/lib/context/account-context";
import { useSession } from "next-auth/react";

const CollectionListComponent = () => {
  const router = useRouter();
  const { member } = useAccount();
  const session = useSession();
  const userType = session?.data?.user?.userType;
  return (
    <div className="flex w-full flex-col items-center gap-x-2 gap-y-2">
      <div className="flex w-full min-h-20 flex-col items-center justify-start gap-x-5 gap-y-2 rounded-t-md border-b-2 bg-gray-800 px-4 py-4 sm:flex-row lg:px-16">
        <div className="flex-shrink-0">
          <span className="text-xl font-bold text-white">Collection List</span>
        </div>
        {/* <div className="flex w-[200px] border-2 border-black h-[40px] items-center gap-x-1 rounded-[5px]">
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
        </div> */}
        {userType === "Ops" ? (
          <div className="flex w-full justify-center sm:justify-end">
            <button
              className="flex h-[50px] w-[200px] items-center justify-center rounded-[5px] border-[1px] bg-theme p-[5px]"
              onClick={() => router.push("/app/collection")}
            >
              Create New Collection
            </button>
          </div>
        ) : null}
      </div>
      <div className="mt-[40px] flex w-full flex-row flex-wrap items-center justify-center gap-x-10 gap-y-10 px-4 lg:px-16">
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
