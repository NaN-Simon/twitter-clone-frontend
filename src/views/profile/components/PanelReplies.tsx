import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useGetUserRepliesQuery } from '@/query/timeline/userReplies.query';
import { Alert, Box, Button, CircularProgress, Container } from '@mui/material';
import ReplyAndRetweetList from '@/components/tweets/ReplyAndRetweetList';

const PanelTweets = () => {
  const { ref, inView } = useInView()

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError } = useGetUserRepliesQuery()

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])

  return (
    <Container disableGutters>
      <Box width='100%' textAlign='center'> {isLoading && <CircularProgress sx={{ m: 1 }} />} </Box>
      {isError && (<Alert severity="error">Ошибка загрузки постов replies</Alert>)}
      {data?.pages.map((page, index: number) => {
        // console.log('page', page);
        return (
          <div  id={page.id} key={index}>
            <ReplyAndRetweetList replies={page || []} />
          </div>
        )
      })}
      {hasNextPage && (
        <Button sx={{ width: '100%' }} ref={ref} onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? 'Loading more...' : 'Load More'}
        </Button>
      )}
    </Container>
  )
}

export default PanelTweets