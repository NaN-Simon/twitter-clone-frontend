import TaggedText from '@/common/TaggedText'
import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'
import VerifiedIcon from '../UI/icon/VerifiedIcon'
import CustomAvatar from '../avatar/CustomAvatar'

interface IAccountMini {
    name?: string
    tag?: string
    hasAvatar?: boolean
    isVerified?: boolean
    isVertical?: boolean
}

const AccountMini: FC<IAccountMini> = ({ name, tag, hasAvatar, isVerified, isVertical }) => {
    return (
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            gap: 1,
            m: 0,
            p: 0,
            minWidth: 'auto'
        }}>
            {hasAvatar && <CustomAvatar src={null} width={30} height={30} />}
            <Box
                sx={{
                    display: { xs: 'none', md: 'flex', lg: 'flex' },
                    flexDirection: isVertical ? 'column' : 'row',
                    alignItems: isVertical ? 'start' : 'center',
                    gap: '0 8px',
                }}
            >
                <Box sx={{ display: 'flex', gap: '8px' }}>
                    <Typography variant="h5" fontWeight={700}> {name} </Typography>
                    {isVerified && <VerifiedIcon />}
                </Box>
                <TaggedText color="tag.contrastText" tagSymbol="@" text={tag} />
            </Box>
        </Box>
    )
}

export default AccountMini