import React, { FC, useState } from 'react'
import { Container, Box, Typography, Button } from '@mui/material';
import JoinedDate from '@/common/JoinedDate';
import TaggedText from '@/common/TaggedText';
import UserLocation from '@/common/UserLocation';
import CustomBanner from '@/components/banner/CustomBanner';
import EditUserInfoPopup from '@/components/editUserInfo/EditUserInfoPopup';
import CustomAvatar from '@/components/avatar/CustomAvatar';
import { IUserInfoData } from '../tweets/types';


interface IUserInfo {
  userInfoData?: IUserInfoData
  hasEditButton?: boolean
}

const initialUserInfoData = {
  profileId: '',
  username: '',
  email: '',
  followers: 0,
  followees: 0,
  joinDate: '',
  bio: '',
  location: '',
  website: '',
  birthDate: '',
  avatarUrl: '',
  bannerUrl: '',
}

const UserInfo: FC<IUserInfo> = ({ userInfoData = initialUserInfoData, hasEditButton }) => {
  const { username, bio, location, joinDate, avatarUrl/* , bannerUrl */ } = userInfoData /* image-сервис удален */
  const [openEditUserInfo, setOpenEditUserInfo] = useState(false)

  const editButtonStyles = {
    borderRadius: '100px',
    height: '40px',
    padding: '0 20px',
    fontFamily: 'button.fontFamily',
    fontStyle: 'button.fontStyle',
    fontWeight: 'button.fontWeight',
    fontSize: 'button.fontSize',
    lineHeight: 'button.lineHeight',
    color: 'primary.dark',
    textTransform: 'none',
    border: '1px solid rgb(207, 217, 222)',
    ':hover': {
      border: '1px solid rgb(255, 255, 255)',
      background: 'rgba(15, 20, 25, 0.1)',
    },
  }

  return (
    <Container disableGutters sx={{ position: 'relative', marginBottom: '10px' }}>
      <Box sx={{ width: '100%', height: '200px', position: 'absolute' }}>
        <CustomBanner img={null}/>
      </Box>
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="end"
        position="relative"
        gap={1}
        mx={2}
        paddingTop='120px'
      >
        <Box>
          <CustomAvatar width={150} height={150} src={avatarUrl} />
          <Typography variant="h2">{username}</Typography>
          <TaggedText color="tag.contrastText" tagSymbol="@" text={username} />
          <Typography variant="h4" my={1}> {bio} </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'row', gap: 1 }}>
            <UserLocation userLocation={location} />
            <JoinedDate joinedDate={joinDate} />
          </Box>
        </Box>
        {hasEditButton && (
          <Button sx={editButtonStyles} onClick={() => { setOpenEditUserInfo(true) }}> Edit profile </Button>
        )}
      </Box>
      {userInfoData && openEditUserInfo && (
        <EditUserInfoPopup
          userInfoData={userInfoData}
          openEditUserInfo={openEditUserInfo}
          setOpenEditUserInfo={setOpenEditUserInfo}
        />
      )}
    </Container>
  )
};

export default UserInfo;
