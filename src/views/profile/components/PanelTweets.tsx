import React, { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { useGetUserTweetsQuery } from '@/query/timeline/userTweets.query';
import TweetAndRetweetList from '@/components/tweets/TweetAndRetweetList';
import { Alert, Box, Button, CircularProgress, Container } from '@mui/material';

const PanelTweets = () => {
  const { ref, inView } = useInView()

  const { data, fetchNextPage, hasNextPage, isFetchingNextPage, isLoading, isError } = useGetUserTweetsQuery()

  useEffect(() => {
    if (inView) {
      fetchNextPage()
    }
  }, [inView])

  return (
    <Container disableGutters>
      <Box width='100%' textAlign='center'> {isLoading && <CircularProgress sx={{ m: 1 }} />} </Box>
      {isError && (<Alert severity="error">Ошибка загрузки постов user</Alert>)}
      {data?.pages.map((page, index: number) => {
        // console.log('page', page);
        return (
        <div id={page.id} key={index}>
          <TweetAndRetweetList tweets={page || []} />
        </div>
      )})}

      {hasNextPage && (
        <Button sx={{width: '100%'}} ref={ref} onClick={() => fetchNextPage()} disabled={isFetchingNextPage}>
          {isFetchingNextPage ? 'Loading more...' : 'Load More'}
        </Button>
      )}
    </Container>
  )
}

export default PanelTweets