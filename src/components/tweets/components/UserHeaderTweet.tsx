/* Имя пользователя, тэг, время создания */

import PassedTime from '@/common/PassedTime'
import { Box } from '@mui/material'
import { useRouter } from 'next/router'
import React, { FC } from 'react'
import MoreActionButton from '../widgets/buttons/ButtonMore'
import UserHeader from '@/components/headers/UserHeader'

import { IUserHeaderTweet } from '@/types/tweets'

const UserHeaderTweet:FC<IUserHeaderTweet> = ({ id, username, creationDate, isBelongs, type, disableMoreActionButton}) => {
  const { push } = useRouter();
  const redirect = (link: string) => {
    push(`/user/${link}`)
  }

  return (
    <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', flexWrap: { xs: 'wrap', sm: 'nowrap' }, gap: '8px' }} >
        <UserHeader
          onClick={() => { redirect(username) }}
          name={username}
          tag={username}
        />
        <PassedTime date={creationDate} />
      </Box>
      {!disableMoreActionButton && isBelongs && <MoreActionButton id={id} type={type} />}
    </Box>
  )
}

export default UserHeaderTweet