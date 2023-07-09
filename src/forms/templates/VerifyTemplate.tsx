import React from 'react';
import { UseFormRegister } from 'react-hook-form';
import { TextField } from '@mui/material';
import PopupVerify from '@/components/popups/PopupVerify';
import { IAuthVerifyRequest } from '@/services/types';

interface IVerifyTemplate {
  openPopup: boolean;
  setOpenPopup: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmitForm: () => void;
  verifyRegisterForm: UseFormRegister<IAuthVerifyRequest>;
}

const VerifyTemplate = ({
  openPopup,
  setOpenPopup,
  onSubmitForm,
  verifyRegisterForm,
}: IVerifyTemplate) => {
  return (
    <>
      <PopupVerify
        title="Activate"
        contentText="Please enter this verification code to get started on Twitter:"
        openPopup={openPopup}
        setOpenPopup={setOpenPopup}
        onPopupSubmit={() => onSubmitForm()}
      >
        <TextField
          {...verifyRegisterForm('activationCode')}
          id="verif"
          label="Verification code"
          type="text"
          variant="outlined"
          margin="dense"
          fullWidth
        />
      </PopupVerify>
    </>
  );
};

export default VerifyTemplate;
