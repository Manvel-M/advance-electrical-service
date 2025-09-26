import { defineAction, ActionError } from "astro:actions";
import { ContactFormSchema } from "@/schemas/contactForm";

export const server = {
  contact: defineAction({
    accept: "json",
    input: ContactFormSchema,
    handler: async (input) => {
      console.log("Server Action received data:", input);

      return {
        success: true,
        message: "Your message has been sent successfully!",
      };
    },
  }),
};
