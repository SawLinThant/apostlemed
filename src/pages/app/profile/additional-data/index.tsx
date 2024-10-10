import React, { ReactElement } from 'react'
import ProfileForm from '~/modules/common/components/Profile/ProfileForm';
import Layout from '~/modules/layout/templates';
import { NextPageWithLayout } from '~/types/global'

const UserAdditionalData:NextPageWithLayout = () => {
  return (
    <div className="flex w-full">
      <ProfileForm />
    </div>
  )
}

UserAdditionalData.getLayout = (page: ReactElement) => {
    return <Layout>{page}</Layout>;
  };

export default UserAdditionalData
