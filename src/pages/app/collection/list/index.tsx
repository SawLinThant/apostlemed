import React, { ReactElement } from "react";
import CollectionListComponent from "~/modules/common/components/Collection/CollectionList";
import Layout from "~/modules/layout/templates";
import { NextPageWithLayout } from "~/types/global";

const CollectionList: NextPageWithLayout = () => {
  return (
    <div className="flex w-full">
      <CollectionListComponent />
    </div>
  );
};
CollectionList.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
export default CollectionList;
