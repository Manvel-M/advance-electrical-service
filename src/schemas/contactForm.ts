import { z } from "astro/zod";

/**
 * Optional: enumerate common service options if you have them.
 * If you don't want an enum, replace ServiceNeeded with z.string().min(1, "Select a service")
 */
export const serviceOptions = [
  "Panel Upgrade / Installation",
  "Sub-Panel Upgrade / Installation",
  "Circuit Breaker Replacement",
  "Dedicated Circuit Installation",
  "Backup Generator Installation",
  "Whole-Home Surge Protection",

  "Whole-Home Rewiring",
  "Appliance Circuit Installation (Dryer, Oven, HVAC, etc.)",
  "Hot Tub / Pool Wiring",

  "Light Fixture Installation / Replacement",
  "Ceiling Fan Installation",
  "Outlet Installation / Repair / Replacement",
  "Switch Installation / Repair / Replacement",

  "Smoke & Carbon Monoxide Detector Installation",
  "Doorbell / Camera Wiring",

  "EV Charger Installation",
  "Landscape / Outdoor Lighting Installation",

  "Home Inspection",

  "Troubleshooting & Diagnostics",
  "Other (please specify)",
] as const;

export const ContactFormSchema = z.object({
  firstName: z
    .string()
    .min(1, "First name is required")
    .max(50, "First name is too long")
    .trim(),
  lastName: z
    .string()
    .min(1, "Last name is required")
    .max(50, "Last name is too long")
    .trim(),
  phone: z
    .string()
    .min(7, "Phone is required")
    .max(25, "Phone is too long")
    .regex(/^\+?[0-9\s().\-]{7,25}$/, "Enter a valid phone number"),
  email: z.string().email("Enter a valid email address").max(254),
  serviceNeeded: z.union([
    z.enum(serviceOptions),
    z.string().min(1, "Please select or enter a service"),
  ]),
  additionalInformation: z
    .string()
    .max(2000, "Additional information is too long")
    .optional()
    .or(z.literal("")),
});

/** TypeScript type for form data */
export type ContactForm = z.infer<typeof ContactFormSchema>;

/** Example: safe parse usage */
const result = ContactFormSchema.safeParse({
  firstName: "Jane",
  lastName: "Doe",
  phone: "(555) 123-4567",
  email: "jane@example.com",
  serviceNeeded: "Panel Upgrade",
  additionalInformation: "Prefer morning appointments",
});

if (!result.success) {
  console.log(result.error.format()); // handle/display errors
} else {
  const data: ContactForm = result.data;
  // submit data to API / Zapier / Housecall Pro
}
