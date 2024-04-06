import React, { FC } from 'react';
import Image from 'next/image';
import { Box, useTheme } from '@mui/material';

import defaultAvatar from '@/assets/images/blankAvatar.png';

interface IAvatar {
  src?: string | null;
  width?: number;
  height?: number;
}

const CustomAvatar: FC<IAvatar> = ({ src, width = 48, height = 48 }) => {
  const theme = useTheme();
  return (
    <Box
      className='component-custom-avatar'
      sx={{
        outline: `5px solid ${theme.palette.primary.light}`,
        borderRadius: '50%',
        overflow: 'hidden',
        width: `${width}px`,
        height: `${height}px`,
        flex: '0 0 auto',
        background: '#000000'
      }}
    >
      <Image
        priority={true}
        width={width}
        height={height}
        style={{ objectFit: 'contain', transform: 'scale(1.1)' }}
        src={src ? src : defaultAvatar}
        alt={src ? src : 'defaultAvatar'}
      />
    </Box>
  );
};

export default CustomAvatar;
