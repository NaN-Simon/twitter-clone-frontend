import React, { useEffect, useState } from 'react';
import SignUpTemplate from './templates/SignUpTemplate';
import { useSignUpMutation } from '@/query/authorization/authorization.mutation';
import { IAuthSignUpRequest } from '@/services/types';
import { useRouter } from 'next/router';
import { useForm, SubmitHandler } from 'react-hook-form';
import { AxiosError } from 'axios';

const SignUpForm = () => {
  const { push } = useRouter();
  const [openPopup, setOpenPopup] = useState(false);
  const [isVerify, setIsVerify] = useState(false);
  const { register, handleSubmit, reset } = useForm<IAuthSignUpRequest>();

  const { mutateAsync, data, isLoading, isError, error, isSuccess } = useSignUpMutation();

  useEffect(()=>{
    data && setOpenPopup(true);
    data && reset
  },[data, reset])

  useEffect(() => {
    console.log('регистрация начата', data);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSuccess]);

  const requestRegister: SubmitHandler<IAuthSignUpRequest> = (value) => {
    mutateAsync(value);
  };

  const onSubmitForm = (event: React.FormEvent) => {
    event.preventDefault();
    handleSubmit(requestRegister)();
  };

  isVerify && push('/signIn');

  return (
    <SignUpTemplate
      authRegisterForm={register}
      onSubmitForm={onSubmitForm}
      isLoading={isLoading}
      openPopup={openPopup}
      setOpenPopup={setOpenPopup}
      setIsVerify={setIsVerify}
      isError={isError}
      error={error as AxiosError}
    />
  );
};

export default SignUpForm;
