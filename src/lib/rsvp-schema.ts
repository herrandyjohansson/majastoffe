import { z } from "zod";

export const rsvpSchema = z
  .object({
    name: z.string().trim().min(1, "Ange namn").max(200),
    person_count: z.enum(["1", "2"], {
      error: () => ({ message: "Välj antal personer" }),
    }),
    companion_name: z.string().max(200).optional(),
    email: z.string().trim().min(1, "Ange e-post").email("Ogiltig e-postadress"),
    attending: z.enum(["yes", "no"], {
      error: () => ({ message: "Välj ja eller nej" }),
    }),
    accommodation: z.string().optional(),
    dietary: z.string().max(4000).optional(),
  })
  .superRefine((data, ctx) => {
    if (data.person_count === "2") {
      const t = data.companion_name?.trim() ?? "";
      if (!t) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Ange namn för den andra personen",
          path: ["companion_name"],
        });
      }
    }
    if (data.attending === "yes") {
      const acc = data.accommodation?.trim() ?? "";
      if (acc !== "yes" && acc !== "no") {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Välj om ni önskar boende på hotellet",
          path: ["accommodation"],
        });
      }
    }
  });

export type RsvpFormValues = z.infer<typeof rsvpSchema>;

/** Form state (t.ex. tom `accommodation` innan användaren valt i listan). */
export type RsvpFormDraft = {
  name: string;
  person_count: "1" | "2";
  companion_name?: string;
  email: string;
  attending?: "" | "yes" | "no";
  accommodation?: "" | "yes" | "no";
  dietary?: string;
};
