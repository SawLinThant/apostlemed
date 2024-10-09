import React, { ReactElement } from "react";
import CreateCollection from "~/modules/common/components/Collection/CreateCollection";
import Layout from "~/modules/layout/templates";
import { NextPageWithLayout } from "~/types/global";

const Collection: NextPageWithLayout = () => {
  return (
    <div className="flex w-full">
      <CreateCollection />
    </div>
  );
};
Collection.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};
export default Collection;
