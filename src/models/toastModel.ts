import { useState } from 'react';

const useToast = () => {
  const [toastDes, setToastDes] = useState<string>('');
  return {
    toastDes,
    setToastDes,
  };
};

export default useToast;
