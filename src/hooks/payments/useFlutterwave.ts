/* eslint-disable @typescript-eslint/no-explicit-any */

type FlutterwaveProps = {
  email: string;
  amount: number; // amount in Naira (or your currency)
  reference: string;
  onSuccess: (response: any) => void;
  onClose: () => void;
  phone_number?: string;
  name?: string;
  currency?: string; // Default: 'NGN'
};

export const useFlutterwavePayment = () => {
  const initializePayment = ({
    email,
    amount,
    reference,
    onSuccess,
    onClose,
    phone_number = "",
    name = "",
    currency = "NGN",
  }: FlutterwaveProps) => {
    const openFlutterwave = () => {
      (window as any).FlutterwaveCheckout({
        public_key: "FLWPUBK_TEST-6fac9fe7f9959214f8d7b1eec0a042fb-X", // 🔁 Replace with your Flutterwave public key
        tx_ref: reference,
        amount,
        currency,
        payment_options: "card, banktransfer, ussd",
        customer: {
          email,
          phone_number,
          name,
        },
        customizations: {
          title: "Starnest",
          description: "starnest savings plan",
          logo: "https://www.starnest.com.ng/logo-h2.png",
        },
        callback: (response: any) => {
          console.log("Payment complete:", response);
          onSuccess(response);
        },
        onclose: () => {
          console.log("Payment modal closed");
          onClose();
        },
      });
    };

    openFlutterwave();
  };

  return initializePayment;
};
