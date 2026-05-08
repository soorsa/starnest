import { Form, Formik } from "formik";
import { ArrowRight, Info, X } from "lucide-react";
import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import * as Yup from "yup";
import { useJoinPlan } from "../../hooks/mutations/useSavingPlan";
import { usePaystackPayment } from "../../hooks/payments/usePaystack";
import { formatPrice } from "../../utils/formatter";
import { useModal } from "../../zustand/modal.state";
import { useUserState } from "../../zustand/user.state";
import NumberInput from "../FormComponents/NumberInput";
import RadioGroup from "../FormComponents/RadioGroup";
import Button from "../GeneralComponent/Button";
import StatusModal from "./StatusModal";

interface Prop {
  plan: Plan;
}

const JoinPlanModal: React.FC<Prop> = ({ plan }) => {
  const { mutate: joinPlan, isPending } = useJoinPlan();
  const { user } = useUserState();
  const paystack = usePaystackPayment();
  const navigate = useNavigate();
  const modal = useModal();
  const paymentTypeOption = [
    { label: "Pay in full", value: "one-time" },
    { label: "Monthly", value: "monthly" },
  ];

  // Generate months options dynamically from plan duration
  const monthsOption = Array.from({ length: plan.duration }, (_, i) => ({
    label: (i + 1).toString(),
    value: (i + 1).toString(),
  }));

  const validationSchema = Yup.object().shape({
    payment_type: Yup.string().required("Payment type is required"),
    hands: Yup.number().min(1).required("required"),
    number_of_months: Yup.string().when("payment_type", {
      is: "monthly",
      then: (schema) => schema.required("Number of months is required"),
      otherwise: (schema) => schema.notRequired(),
    }),
  });

  const initialValues = {
    payment_type: plan.type === "one time" ? "one-time" : "",
    hands: 1,
    number_of_months: "1",
  };

  const handleSubmit = (values: typeof initialValues) => {
    const amount =
      values.payment_type === "monthly"
        ? Number(values.number_of_months) * Number(plan.amount_per_cycle)
        : Number(plan.amount_per_cycle);
    const total_amount_payable = amount * Number(values.hands) + 2500;
    const payload: JoinPlanPayload = {
      plan_id: Number(plan.id),
      hands: Number(values.hands),
      number_of_months:
        values.payment_type === "one-time"
          ? plan.duration
          : Number(values.number_of_months),
    };
    paystack({
      email: user?.email || "",
      amount: total_amount_payable,
      reference: "",
      onSuccess() {
        joinPlan(payload, {
          onSuccess(data) {
            modal.openModal(
              <StatusModal
                title="Congrats!"
                msg={data.message}
                status="success"
              />
            );
            navigate(`/dashboard/my-plans/${data.plan_id}`);
          },
        });
      },
      onClose() {
        toast.error(`Payment of ${formatPrice(total_amount_payable)} canceled`);
      },
    });
  };
  const Watcher = ({
    type,
    setFieldValue,
  }: {
    type: string;
    setFieldValue: (field: string, value: string) => void;
  }) => {
    useEffect(() => {
      if (type === "one-time") {
        setFieldValue("number_of_months", plan.duration.toString());
      }
    }, [type, setFieldValue]);
    return null;
  };

  return (
    <div className="flex flex-col w-3xl max-w-xs md:max-w-xl lg:max-w-3xl max-h-[75vh] overflow-y-scroll scrollbar-hide">
      <div className="">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnMount
          onSubmit={handleSubmit}
        >
          {({ isValid, values, setFieldValue, touched, errors }) => {
            const amount =
              plan.type === "monthly"
                ? Number(values.number_of_months) *
                  Number(plan.amount_per_cycle)
                : Number(plan.amount_per_cycle);
            const total_amount_payable = amount + 2500;
            const isOntime =
              values.number_of_months === String(plan.duration) ||
              values.payment_type === "one-time";

            return (
              <Form className="grid lg:grid-cols-2 gap-4 min-h-55">
                <Watcher
                  type={values.payment_type}
                  setFieldValue={setFieldValue}
                />
                <div className="space-y-5 w-full text-left">
                  <div className="">
                    <h2 className="text-2xl font-starnest-bold">
                      Join {plan.name}{" "}
                      <span className="text-gray-600">savings plan</span>
                    </h2>
                    <hr className="w-full text-gray-300" />
                  </div>
                  <div className="space-y-1">
                    <div className="col-span-2 text-sm text-gray-700">
                      How many hands do you want?
                    </div>
                    <NumberInput min={1} name="hands" />
                  </div>
                  {plan.type === "monthly" && (
                    <div className="space-y-1">
                      {/* <div className="text-lg font-medium">
                      How do you want to pay?
                    </div> */}
                      <RadioGroup
                        options={paymentTypeOption}
                        name="payment_type"
                        label="How do you want to pay?"
                        orientation="horizontal"
                        optionClassName="min-w-[calc(50%-8px)]"
                      />
                      {touched.payment_type && errors.payment_type && (
                        <div className="text-red-500 text-sm mt-1">
                          {errors.payment_type}
                        </div>
                      )}
                    </div>
                  )}

                  {values.payment_type === "monthly" && (
                    <div className="space-y-1">
                      <div className="text-lg font-medium">
                        How many months do you want to pay for? (Max:{" "}
                        {plan.duration} months)
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

                  {isOntime && plan.type === "monthly" && (
                    <div className="bg-green-50 p-3 rounded-lg text-sm text-green-800">
                      You'll pay for all {plan.duration} months at once and get
                      the reward immediately after completion.
                    </div>
                  )}
                </div>

                <div className="p-4 border border-gray-200 rounded-2xl flex flex-col text-left">
                  <div className="bg-green-50 p-3 rounded-2xl text-sm text-green-800 flex gap-2">
                    <Info />
                    <div className="">
                      You'll be recieving{" "}
                      <span className="font-starnest-bold">
                        {formatPrice(
                          plan.expected_total_payment * Number(values.hands)
                        )}{" "}
                      </span>
                      after completion of {plan.duration} months.
                    </div>
                  </div>
                  <h3 className="font-semibold text-lg mb-3">
                    Payment Summary
                  </h3>
                  <div className="flex-1">
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Activation fee</span>
                        <span className="font-medium">
                          {formatPrice(2500 * Number(values.hands))}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Number of hands</span>
                        <span className="font-medium">
                          {values.hands} hands
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Number of months</span>
                        <span className="font-medium">
                          {values.payment_type === "one-time"
                            ? `${plan.duration} months`
                            : `${values.number_of_months} months`}
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          {values.payment_type} amount
                        </span>
                        <span className="font-medium">
                          {formatPrice(
                            Number(plan.amount_per_cycle) * Number(values.hands)
                          )}
                        </span>
                      </div>
                      <div className="flex justify-between pt-2 border-t border-gray-200">
                        <span className="text-gray-600">Subtotal</span>
                        <span className="font-medium">
                          {formatPrice(amount * Number(values.hands))}
                        </span>
                      </div>
                      <div className="flex justify-between text-base font-semibold">
                        <span>Total payable</span>
                        <span className="text-green-600">
                          {formatPrice(
                            total_amount_payable * Number(values.hands)
                          )}
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
    </div>
  );
};

export default JoinPlanModal;
