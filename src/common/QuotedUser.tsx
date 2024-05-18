import { Box, Typography } from '@mui/material'
import React, { FC } from 'react'
import TaggedText from './TaggedText'
import { IQuotedUser } from '@/types/tweets'

const QuotedUser:FC<IQuotedUser> = ({username}) => {
  return (
    <Box display="flex" flexDirection="row" gap={0.5}>
      <Typography
        variant="h6"
        color="secondary.main"
        display="flex"
        flexDirection="row"
        gap={0.5}
      >
        Replying to
      </Typography>
      <TaggedText color="tag.main" tagSymbol="@" text={username} />
    </Box>
  )
}

export default QuotedUser