import { z } from "zod";

export const signUpSchema = z.object({
  fullName: z.string().min(3),
  email: z.string().email(),
  cardNumberId: z.coerce.number(),
  nationalIdentityCard: z.string().nonempty("ID Card required."),
  password: z.string().min(8),
});

export const signInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});
