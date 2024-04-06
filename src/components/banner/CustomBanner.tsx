import { Container, IconButton, Paper, Typography, useTheme } from '@mui/material'
import Image from 'next/image';
import React, { FC } from 'react'
import profileBackground from '@/assets/images/profileBackground.png'
interface ICustomBanner {
  img?: string | null;
}

const CustomBanner: FC<ICustomBanner> = ({ img }) => {
  const theme = useTheme()
  return (
    <Container disableGutters sx={{ flex: '0 0 auto', width: '100%', height: 'inherit' }} >
      {!img &&
        <Paper sx={{
          width: '100%',
          height: 'inherit',
          background: `linear-gradient(0deg,
            ${theme.palette.common.black} 0%,
            ${theme.palette.secondary.main} 100%)`
        }} />
      }
      <Image
        fill
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ objectFit: 'cover', opacity: '0.2' }}
        src={profileBackground}
        alt={'profileBackground'}
      />
      <Typography variant='h2' sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        textAlign: 'center',
        color: 'white',
        fontFamily: 'VINERITC',
        fontSize: '40px'
      }}>
        Twitter Clone
      </Typography>
      {img && <IconButton sx={{ width: '100%', height: '200px', p: 0 }}>
        <Image
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          placeholder="blur"
          blurDataURL={img && img}
          style={{ objectFit: 'cover' }}
          src={img && img}
          alt={img ? img : 'defaultBanner'} />
      </IconButton>}
    </Container>
  )
}

export default CustomBanner