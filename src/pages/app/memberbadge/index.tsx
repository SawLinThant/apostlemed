import { ReactElement } from "react";
import Memberbadge from "~/modules/account/components/memberbadge";

import Layout from "~/modules/layout/templates";
import { NextPageWithLayout } from "~/types/global";

const MemberBadge: NextPageWithLayout = () => {
  return (
    <div className="flex w-full">
      <Memberbadge/>
    </div>
  );
};

MemberBadge.getLayout = (page: ReactElement) => {
  return <Layout>{page}</Layout>;
};

export default MemberBadge;
