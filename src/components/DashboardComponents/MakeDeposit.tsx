import { Form, Formik } from "formik";
import { ArrowRight, Info, X } from "lucide-react";
import React from "react";
import * as Yup from "yup";
import { useMakeDeposit } from "../../hooks/mutations/useSavingPlan";
import { formatDate, formatPrice } from "../../utils/formatter";
import { useModal } from "../../zustand/modal.state";
import RadioGroup from "../FormComponents/RadioGroup";
import Button from "../GeneralComponent/Button";
import StatusModal from "./StatusModal";

interface Prop {
  single?: boolean;
  user_plan: UserSavingPlan;
}
const MakeDeposit: React.FC<Prop> = ({ single = true, user_plan }) => {
  const modal = useModal();
  const { mutate, isPending } = useMakeDeposit();
  // Generate months options dynamically from plan duration
  const remaining_months =
    user_plan.plan_object.duration - user_plan.current_cycle;
  const monthsOption = Array.from({ length: remaining_months }, (_, i) => ({
    label: (i + 1).toString(),
    value: (i + 1).toString(),
  }));

  const validationSchema = Yup.object().shape({
    number_of_months: Yup.string().required("required"),
  });

  const initialValues = {
    number_of_months: "1",
  };
  const handleSubmit = (values: typeof initialValues) => {
    const payload = {
      user_plan_id: Number(user_plan.id),
      number_of_months: single ? 1 : Number(values.number_of_months),
    };
    mutate(payload, {
      onSuccess(data) {
        modal.openModal(
          <StatusModal title="Success!" msg={data.message} status="success" />
        );
      },
    });
  };

  return (
    <div
      className={`${
        single ? "w-sm" : "w-3xl max-h-[70vh] overflow-y-auto"
      } max-w-xs md:max-w-xl lg:max-w-3xl scrollbar-hide`}
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        validateOnMount
        onSubmit={handleSubmit}
      >
        {({ isValid, values, touched, errors }) => {
          const amount =
            Number(values.number_of_months) *
            Number(user_plan.amount_per_month);

          return (
            <Form
              className={`grid ${
                single ? "" : "lg:grid-cols-2"
              } gap-4 min-h-55`}
            >
              <div className="space-y-5 w-full text-left">
                {single && (
                  <div className="px-4 py-2 bg-blue-50 rounded-lg text-sm text-blue-950 flex items-center gap-2">
                    <Info size={18} />
                    <div className="">
                      You making deposit for{" "}
                      <b className="font-starnest-mid">
                        {formatDate(user_plan.next_payment_date)}
                      </b>
                    </div>
                  </div>
                )}
                {!single && (
                  <div className="space-y-1">
                    <div className="text-lg font-medium">
                      How many months do you want to pay for? (Remaining:{" "}
                      {remaining_months} months)
                    </div>
                    <RadioGroup
                      options={monthsOption}
                      name="number_of_months"
                      orientation="horizontal"
                      optionClassName="min-w-[calc(25%-8px)]"
                    />
                    {touched.number_of_months && errors.number_of_months && (
                      <div className="text-red-500 text-sm mt-1">
                        {errors.number_of_months}
                      </div>
                    )}
                  </div>
                )}
                {Number(values.number_of_months) === remaining_months && (
                  <div className="bg-green-50 p-3 rounded-lg text-xs text-green-800">
                    You'll pay for all {remaining_months} months at once and get
                    your reward and total savings on{" "}
                    <b className="font-starnest-mid">
                      {formatDate(user_plan.end_date)}
                    </b>
                    .
                  </div>
                )}
              </div>

              <div className="p-4 border border-gray-200 rounded-2xl flex flex-col">
                <h3 className="font-semibold text-lg mb-3">Payment Summary</h3>
                <div className="flex-1">
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-600">Number of months</span>
                      <span className="font-medium">
                        {values.number_of_months} months
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Number of hands</span>
                      <span className="font-medium">
                        {user_plan.hands} hands
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Monthly amount</span>
                      <span className="font-medium">
                        {formatPrice(user_plan.amount_per_month)}
                      </span>
                    </div>
                    <div className="flex justify-between pt-2 border-t border-gray-200">
                      <span className="text-gray-600">Subtotal</span>
                      <span className="font-medium">{formatPrice(amount)}</span>
                    </div>
                    <div className="flex justify-between text-base font-semibold">
                      <span>Total payable</span>
                      <span className="text-green-600">
                        {formatPrice(amount)}
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
                    className="col-span-3"
                    type="submit"
                    loadingLabel="Processing..."
                    disabled={!isValid || isPending}
                    isLoading={isPending}
                    rightIcon={<ArrowRight />}
                  />
                </div>
              </div>
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default MakeDeposit;
