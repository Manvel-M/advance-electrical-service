import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

// import { actions } from "astro:actions";
// import { contactSchema, type ContactFormData } from "@/schema/contactSchema";

import FormField from "./FormField";
import { Button, Input, Select, Textarea } from "@/components/ui";
import {
  ContactFormSchema,
  serviceOptions,
  type ContactForm,
} from "@/schemas/contactForm";
// import { toast, Toaster } from "react-hot-toast";

const selectOptions = serviceOptions.map((option) => ({
  value: option,
  label: option,
}));

function ContactForm2() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm({ resolver: zodResolver(ContactFormSchema) });

  //   const notifySuccess = () => toast("Message sent successfuly!");
  //   const notifyError = () => toast("Something went wrong. Try again later.");

  // const onSubmit = async (data: ContactForm) => {
  //   try {
  //     const { error } = await actions.send(data);
  //     if (error) {
  //       notifyError();
  //     } else {
  //       notifySuccess();
  //       reset();
  //     }
  //   } catch (error) {
  //     console.error("Submission error", error);
  //   }
  // };

  const handleSubmitForm = async (data: ContactForm) => {
    try {
      // Netlify requires form-encoded data
      const formData = new FormData();
      Object.entries(data).forEach(([key, value]) => {
        formData.append(key, value ?? "");
      });
      formData.append("form-name", "contact");

      await fetch("/", {
        method: "POST",
        body: formData,
      });
    } catch (err) {
      console.error("Submission failed", err);
    }
  };

  return (
    <>
      <form
        name="contact"
        data-netlify="true"
        onSubmit={handleSubmit(handleSubmitForm)}
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
          />

          <FormField
            id="last-name"
            label="Last Name"
            error={errors.lastName}
            placeholder="Last Name"
            className="w-full"
          />

          <FormField
            id="email"
            label="Email"
            error={errors.email}
            placeholder="Email"
            className="w-full"
          />

          <FormField
            id="phone"
            label="Phone"
            error={errors.phone}
            placeholder="Phone"
            className="w-full"
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
          />

          <FormField
            as="textarea"
            id="message"
            label="Additional Information"
            error={errors.additionalInformation}
            placeholder="Additional Information"
            className="w-full md:col-span-2"
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

export default ContactForm2;
