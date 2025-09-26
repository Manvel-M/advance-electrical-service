import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import FormField from "./FormField";
import { Button } from "@/components/ui";
import {
  ContactFormSchema,
  serviceOptions,
  type ContactForm,
} from "@/schemas/contactForm";
import { actions } from "astro:actions";

const selectOptions = serviceOptions.map((option) => ({
  value: option,
  label: option,
}));

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      serviceNeeded: "",
      additionalInformation: "",
    },
  });

  const handleSubmitForm = async (data: ContactForm) => {
    try {
      const response = await actions.contact(data);
      if (response.data?.message) {
        alert(response.data.message);
        reset();
      } else {
        alert("There was an error sending your message. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <>
      <form
        name="contact"
        onSubmit={handleSubmit(handleSubmitForm)}
        data-netlify="true"
      >
        <input type="hidden" name="form-name" value="contact" />
        <input type="hidden" name="bot-field" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            id="first-name"
            label="First Name"
            error={errors.firstName}
            placeholder="First Name"
            className="w-full"
            {...register("firstName")}
          />

          <FormField
            id="last-name"
            label="Last Name"
            error={errors.lastName}
            placeholder="Last Name"
            className="w-full"
            {...register("lastName")}
          />

          <FormField
            id="email"
            label="Email"
            error={errors.email}
            placeholder="Email"
            className="w-full"
            {...register("email")}
          />

          <FormField
            id="phone"
            label="Phone"
            error={errors.phone}
            placeholder="Phone"
            className="w-full"
            {...register("phone")}
          />

          <FormField
            as="select"
            id="service-needed"
            label="Service Needed"
            error={errors.serviceNeeded}
            className="w-full md:col-span-2"
            options={[
              { value: "", label: "Select a service" },
              ...selectOptions,
            ]}
            {...register("serviceNeeded")}
          />

          <FormField
            as="textarea"
            id="message"
            label="Additional Information"
            error={errors.additionalInformation}
            placeholder="Additional Information"
            className="w-full md:col-span-2"
            {...register("additionalInformation")}
          />
          <div className="flex justify-center md:col-span-2">
            <Button
              type={"submit"}
              variant={isSubmitting ? "secondary" : "primary"}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}

export default Form;
