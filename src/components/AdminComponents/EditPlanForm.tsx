import { Form, Formik } from "formik";
import type React from "react";
import * as Yup from "yup";
import { useEditPlan } from "../../hooks/mutations/useSavingPlan";
import { useModal } from "../../zustand/modal.state";
import InputField from "../FormComponents/InputField";
import ListInputField from "../FormComponents/ListInput";
import RadioGroup from "../FormComponents/RadioGroup";
import Button from "../GeneralComponent/Button";
interface Prop {
  plan: Plan;
}
const EditPlan: React.FC<Prop> = ({ plan }) => {
  const { mutate: update, isPending } = useEditPlan();
  const modal = useModal();
  const initialValues = {
    name: plan.name || "",
    image: plan.image || null,
    video_link: plan.video_link || "",
    description: plan.description || "",
    amount_per_cycle: plan.amount_per_cycle || "",
    type: plan.type || "",
    duration: plan.duration || "",
    interest_rate: plan.interest_rate || "",
    benefits: plan.benefits || [""],
  };
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("required"),
    video_link: Yup.string().required("required"),
    description: Yup.string().required("required"),
    amount_per_cycle: Yup.string().required("required"),
    type: Yup.string().required("required"),
    duration: Yup.string().required("required"),
    interest_rate: Yup.string().required("required"),
    benefits: Yup.array()
      .of(Yup.string().trim().min(1).required("required"))
      .max(12, "Too many benefits")
      .min(1, "Add at least one benefit"),
  });
  const paymentTypeOption = [
    { label: "Full payment", value: "one time" },
    { label: "Monthly", value: "monthly" },
  ];

  const handleSubmit = (values: typeof initialValues) => {
    const payload: UpdatePlanPayload = {
      id: plan.id,
      benefits: values.benefits,
      name: values.name,
      video_link: values.video_link,
      duration: String(values.duration),
      description: values.description,
      type: values.type,
      interest_rate: values.interest_rate,
      amount_per_cycle: values.amount_per_cycle,
    };
    update(payload, {
      onSuccess() {
        modal.closeModal();
      },
    });
  };

  return (
    <div className="max-h-[65vh] overflow-y-auto scrollbar-hide">
      <h2 className="text-2xl text-left font-starnest-bold">Edit Plan</h2>
      <hr className="w-1/3 mb-4 text-gray-500" />
      <Formik
        initialValues={initialValues}
        validateOnMount
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isValid }) => {
          return (
            <Form className="space-y-5">
              <div className="space-y-3">
                <InputField
                  theme="dark"
                  name="name"
                  label="Title"
                  placeholder="Plan name"
                />
                <div className="grid grid-cols-2 gap-2">
                  <InputField
                    theme="dark"
                    name="video_link"
                    label="Video link"
                    placeholder="Link"
                  />
                  <InputField
                    theme="dark"
                    name="amount_per_cycle"
                    label="Amount per month"
                    placeholder="Amount"
                  />
                </div>
                <RadioGroup
                  name="type"
                  options={paymentTypeOption}
                  label="Payment type"
                  className="text-left"
                  orientation="horizontal"
                  optionClassName="min-w-[calc(50%-8px)]"
                />
                <div className="grid grid-cols-2 gap-2">
                  <InputField
                    theme="dark"
                    name="duration"
                    label="Duration (months)"
                    placeholder="No. of months"
                  />
                  <InputField
                    theme="dark"
                    name="interest_rate"
                    label="Interest rate (%)"
                    placeholder="Interest rate"
                  />
                </div>
                <InputField
                  theme="dark"
                  name="description"
                  type="textarea"
                  placeholder="About this plan..."
                  label="Description"
                />
                <ListInputField
                  label="Benefits"
                  name="benefits"
                  placeholder="Enter benefits..."
                />
              </div>
              <Button
                label="Update"
                type="submit"
                disabled={!isValid || isPending}
                isLoading={isPending}
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default EditPlan;
