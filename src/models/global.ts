import { useState } from 'react';

const useToast = () => {
  const [toastOpen, setToastOpen] = useState<boolean>(false);
  const [toastDes, setToastDes] = useState<string>('');
  return {
    toastOpen,
    setToastOpen,
    toastDes,
    setToastDes,
  };
};

export default useToast;
