/* eslint-disable @typescript-eslint/no-explicit-any */
type PaystackProps = {
  email: string;
  amount: number; // amount in Naira
  reference: string;
  onSuccess: (reference: any) => void;
  onClose: () => void;
};

export const usePaystackPayment = () => {
  const initializePayment = ({
    email,
    amount,
    reference,
    onSuccess,
    onClose,
  }: PaystackProps) => {
    const paystack = (window as any).PaystackPop?.setup({
      // key: "pk_live_533947b627d98727651a32d5cba9c2b72979f3c7", // 🔁 Replace with your Paystack public key
      key: "pk_test_b9e752c6a78ba66ac52db02d686bedf6ccd3a6ac", // 🔁 Replace with your Paystack public key
      email,
      ref: reference,
      amount: amount * 100, // convert to kobo
      currency: "NGN",
      callback: onSuccess,
      onClose,
    });

    paystack?.openIframe();
  };

  return initializePayment;
};
