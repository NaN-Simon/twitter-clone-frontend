import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useGetUserRepliesQuery } from '@/query/timeline/userReplies.query';
import { Alert, Box, Button, CircularProgress, Container } from '@mui/material';
import ReplyList from '@/components/tweets/ReplyList';

const PanelTweets = () => {
  const { ref, inView } = useInView()

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError } = useGetUserRepliesQuery()

  console.log(data);

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])

  return (
    <Container disableGutters>
      <Box width='100%' textAlign='center'> {isLoading && <CircularProgress sx={{ m: 1 }} />} </Box>
      {isError && (<Alert severity="error">Ошибка загрузки постов replies</Alert>)}
      {data && data.pages.map((page: any, index: number) => (
        <React.Fragment key={index}>
          <ReplyList replies={page || []}/>
        </React.Fragment>
      ))}
      {hasNextPage && (
        <Button sx={{width: '100%'}} ref={ref} onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? 'Loading more...' : 'Load More'}
        </Button>
      )}
    </Container>
  )
}

export default PanelTweets