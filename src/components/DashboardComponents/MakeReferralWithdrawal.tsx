import { Form, Formik } from "formik";
import { Info } from "lucide-react";
import * as Yup from "yup";
import { useMakeReferralWithdrawal } from "../../hooks/mutations/useReferral";
import { useUpdateUser } from "../../hooks/mutations/useUsers";
import { useModal } from "../../zustand/modal.state";
import { useUserState } from "../../zustand/user.state";
import InputField from "../FormComponents/InputField";
import Button from "../GeneralComponent/Button";
import StatusModal from "./StatusModal";

const MakeReferralWithdrawal = () => {
  const { mutate: withdraw, isPending } = useMakeReferralWithdrawal();
  const { mutate: setBankDetails, isPending: settingBankDetails } =
    useUpdateUser();
  const { user } = useUserState();
  const modal = useModal();

  const initialValues = {
    amount: 1000,
    bank: user?.bank,
    account_name: user?.account_name,
    account_number: user?.account_number,
  };
  const validationSchema = Yup.object().shape({
    amount: Yup.number().required("required"),
    bank: Yup.string().required("required"),
    account_name: Yup.string().required("required"),
    account_number: Yup.string().required("required"),
  });
  const handleSubmit = (values: typeof initialValues) => {
    const bankDetails = {
      bank: values.bank,
      account_name: values.account_name,
      account_number: values.account_number,
    };
    const amount = {
      amount: values.amount,
    };
    setBankDetails(bankDetails, {
      onSuccess() {
        withdraw(amount, {
          onSuccess() {
            modal.openModal(
              <StatusModal
                status="info"
                title="Pending"
                msg="Please be patient, we have recieved your withdrawal request and you will receive your alert shortly."
              />
            );
          },
        });
      },
    });
  };
  return (
    <div className="w-xs">
      <Formik
        initialValues={initialValues}
        validateOnMount
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => {
          return (
            <Form>
              <div className="text-left space-y-5">
                <div className="space-y-1">
                  <div className="font-starnest-mid">Account Details:</div>
                  <div className="flex gap-1 text-xs text-gray-600">
                    <Info />
                    <div className="">
                      Please confirm the bank details you would be using to
                      recieve your earnings.
                    </div>
                  </div>
                  <hr className="text-gray-200 w-full mb-4" />
                </div>
                <div className="space-y-2">
                  <InputField
                    name="account_name"
                    label="Full Name"
                    placeholder="Full Name"
                  />
                  <InputField
                    name="bank"
                    label="Bank"
                    placeholder="Bank Name"
                  />
                  <InputField
                    name="account_number"
                    label="Account Number"
                    placeholder="Account Number"
                  />
                  <InputField
                    name="amount"
                    label="Amount to withdraw"
                    placeholder="Amount"
                    formatMoney
                  />
                </div>
                <Button
                  label="Submit"
                  type="submit"
                  disabled={!isValid || isPending || settingBankDetails}
                  isLoading={isPending || settingBankDetails}
                />
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default MakeReferralWithdrawal;
