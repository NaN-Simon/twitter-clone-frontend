import React, { FC, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { IAddTweetRequest } from '@/services/types';
import { useAddTweetMutation } from '@/query/tweet/addTweet.mutation';
import InnerTemplate from './templates/InnerTemplate';

interface IInnerTweet {
  avatarUrl?: string | null;
  onClick?: React.Dispatch<React.SetStateAction<boolean>>;
}

const InnerTweet: FC<IInnerTweet> = ({ avatarUrl, onClick }) => {
  const { control, register, handleSubmit, reset } = useForm<IAddTweetRequest>();
  const { mutateAsync, isSuccess } = useAddTweetMutation();

  const onSubmit = async (requestData: IAddTweetRequest) => {
    await mutateAsync(requestData);
    onClick && onClick(false)
  };

  useEffect(()=>{ reset() },[isSuccess, reset])

  return (
    <InnerTemplate
    control={control}
      avatarUrl={avatarUrl}
      register={register}
      handleSubmit={handleSubmit}
      onSubmit={onSubmit}
    />
  );
};

export default InnerTweet;
