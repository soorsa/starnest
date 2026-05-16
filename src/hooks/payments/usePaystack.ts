/* eslint-disable @typescript-eslint/no-explicit-any */
import PaystackPop from "@paystack/inline-js";
type PaystackProps = {
  email: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  amount: number; // amount in Naira
  reference: string;
  onSuccess: (reference: any) => void;
  onClose: () => void;
};

export const usePaystackPayment = () => {
  const initializePayment = ({
    email,
    firstName,
    lastName,
    phoneNumber,
    amount,
    onSuccess,
    onClose,
  }: PaystackProps) => {
    const paystack = new PaystackPop();
    // const paystack = (window as any).PaystackPop?.setup({
    //   // key: "pk_live_533947b627d98727651a32d5cba9c2b72979f3c7", // 🔁 Replace with your Paystack public key
    //   key: "pk_test_b9e752c6a78ba66ac52db02d686bedf6ccd3a6ac", // 🔁 Replace with your Paystack public key
    //   email,
    //   ref: reference,
    //   amount: amount * 100, // convert to kobo
    //   currency: "NGN",
    //   callback: onSuccess,
    //   onClose,
    // });
    paystack.newTransaction({
      key: "pk_live_533947b627d98727651a32d5cba9c2b72979f3c7", // 🔁 Replace with your Paystack public key
      // key: "pk_test_b9e752c6a78ba66ac52db02d686bedf6ccd3a6ac", // 🔁 Replace with your Paystack public key
      email,
      amount: amount * 100, // convert to kobo
      currency: "NGN",
      firstName: firstName,
      lastName: lastName,
      phone: phoneNumber,
      onSuccess: (transaction: any) => {
        onSuccess(transaction);
      },
      onCancel() {
        onClose();
      },
    });

    // paystack?.openIframe();
  };

  return initializePayment;
};
