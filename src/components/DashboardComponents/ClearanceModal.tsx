import { Form, Formik } from "formik";
import { ArrowRight, Info, X } from "lucide-react";
import React from "react";
import * as Yup from "yup";
import { useClearance } from "../../hooks/mutations/useSavingPlan";
import { formatPrice } from "../../utils/formatter";
import { useModal } from "../../zustand/modal.state";
import Button from "../GeneralComponent/Button";

import toast from "react-hot-toast";
import { useUpdateUser } from "../../hooks/mutations/useUsers";
import { usePaystackPayment } from "../../hooks/payments/usePaystack";
import { useUserState } from "../../zustand/user.state";
import InputField from "../FormComponents/InputField";
interface Prop {
  item: UserSavingPlan;
}
const ClearanceModal: React.FC<Prop> = ({ item }) => {
  const { mutate, isPending } = useClearance();
  const paystack = usePaystackPayment();
  const { mutate: setBankDetails, isPending: settingBankDetails } =
    useUpdateUser();
  const { user } = useUserState();
  const modal = useModal();
  const initialValues = {
    bank: user?.bank,
    account_name: user?.account_name,
    account_number: user?.account_number,
  };
  const validationSchema = Yup.object().shape({
    bank: Yup.string().required("required"),
    account_name: Yup.string().required("required"),
    account_number: Yup.string().required("required"),
  });
  const handleSubmit = (values: typeof initialValues) => {
    paystack({
      email: user?.email || "",
      amount: 1500,
      reference: "",
      onSuccess() {
        setBankDetails(values, {
          onSuccess() {
            mutate({ id: item.id });
          },
        });
      },
      onClose() {
        toast.error("Paystack closed");
      },
    });
  };

  return (
    <div className="">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnMount
        onSubmit={handleSubmit}
      >
        {({ isValid }) => {
          return (
            <Form className="w-xl max-w-xs md:max-w-2xl grid md:grid-cols-2 gap-2 max-h-[75vh] overflow-y-auto scrollbar-hide">
              <div className="text-left md:col-span-2 bg-blue-500/5 p-2 text-sm rounded-xl flex items-start gap-2 text-blue-900 ">
                <Info />
                <span className="flex-1">
                  After completing Clearance and paying the Clearance Fee you
                  will recieve your Payment of{" "}
                  <b>
                    {formatPrice(item.plan_object.expected_total_payment)}{" "}
                    within 3 bussiness days.
                  </b>
                </span>
              </div>

              <div className="text-left">
                <div className="font-starnest-mid">Account Details:</div>
                <hr className="text-gray-200 w-2/3 mb-4" />
                <div className="">
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
                </div>
              </div>
              <div className="space-y-3">
                <div className="p-4 border border-gray-200 rounded-2xl flex flex-col">
                  <h3 className="font-semibold text-lg mb-3">
                    Payment Summary
                  </h3>
                  <div className="flex-1">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Clearance Fee:</span>
                        <span className="font-medium">{formatPrice(1500)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Plan name</span>
                        <span className="font-medium">{item.plan.name}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Duration</span>
                        <span className="font-medium">
                          {item.plan.duration} months
                        </span>
                      </div>
                      <div className="flex justify-between text-base font-semibold pt-2 border-t border-gray-200">
                        <span>Total</span>
                        <span className="text-green-600">
                          {formatPrice(1500)}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 w-full gap-2 mt-6">
                    <Button
                      label=""
                      icon={<X />}
                      className="bg-red-700 hover:bg-red-800"
                      type="button"
                      onClick={modal.closeModal}
                    />
                    <Button
                      label="Proceed"
                      type="submit"
                      className="col-span-3"
                      loadingLabel="Processing..."
                      disabled={isPending || settingBankDetails || !isValid}
                      isLoading={isPending || settingBankDetails}
                      rightIcon={<ArrowRight />}
                    />
                  </div>
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default ClearanceModal;
