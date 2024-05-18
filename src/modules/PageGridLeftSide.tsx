import InnerTweet from '@/components/inner/InnerTweet'
import AccountMenu from '@/components/navigation/AccountMenu'
import Navigation from '@/components/navigation/Navigation'
import Popup from '@/components/popups/Popup'
import { useGetAuthorizedUserDataQuery } from '@/query/profile/authorizedUserData.query'
import theme from '@/theme/theme'
import { Grid, Box, Button } from '@mui/material'
import React, { FC, useState } from 'react'

interface IPageGridLeftSide {
  pageName: string
}

const PageGridLeftSide: FC<IPageGridLeftSide> = ({ pageName }) => {
  const { data: profileData, isLoading: profileDataIsLoading } = useGetAuthorizedUserDataQuery();
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  return (
    <Grid
      aria-label='grid-left-side'
      item
      sx={{
        minWidth: { xs: '35px', sm: '35px', md: '200px', lg: '200px' },
        position: 'relative',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
          position: 'fixed',
          height: '100vh',
          width: 'inherit',
          py: 1,
        }}>
        <Box
          aria-label='grid-left-side-top'
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3
          }}>
          <Navigation plan='authorized' activeItem={pageName} />
          <Button
            aria-label='Post'
            variant="contained"
            onClick={() => { setIsPopupOpen(true) }}
            sx={{
              borderRadius: '100px',
              minWidth: '0px',
              width: { xs: '28px', md: '100%' },
              height: { xs: '28px', md: '40px' },
              padding: { xs: '0px', md: '10px' },
              fontFamily: theme.typography.button.fontFamily,
              fontStyle: theme.typography.button.fontStyle,
              fontWeight: theme.typography.button.fontWeight,
              fontSize: theme.typography.button.fontSize,
              lineHeight: theme.typography.button.lineHeight,
              color: theme.typography.button.color,
              ':hover': {
                background: theme.palette.primary.contrastText,
              },
            }}
          >
            <Box>P</Box>
            <Box sx={{ display: { xs: 'none', md: 'inline' } }}>ost</Box>
          </Button>
          {isPopupOpen && (
            <Popup
              sx={{ minWidth: { sx: 0, sm: '600px' } }}
              title="Post"
              openPopup={isPopupOpen}
              setOpenPopup={setIsPopupOpen}
            >
              <InnerTweet onClick={() => { setIsPopupOpen(false) }} />
            </Popup>
          )}
        </Box>
        <AccountMenu
          aria-label='grid-left-side-bottom'
          isLoading={profileDataIsLoading}
          hasAvatar
          isVertical
          name={profileData && profileData.username}
          tag={profileData && profileData.username} />
      </Box>
    </Grid>
  )
}

export default PageGridLeftSide