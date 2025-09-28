import { z } from "zod";

export const signupSchema = z.object({
  username: z.string()
  .min(5, "Username must be at least 5 characters")
  .max(20, "Username must be at most 20 characters")
  .regex(/^[a-zA-Z0-9_]+$/, "Username can only contain letters, numbers, and underscores"),
  
  email: z.string().email("Please enter a valid email address"),
  password: z.string().trim()
  .min(6, "Password must be at least 6 characters")
  .max(20, "Password must be at most 20 characters"),
  confirmPassword: z.string(),
  helpText: z.string()
  .min(4, "Help text must be at least 4 characters")
  .max(20, "Help text must be at most 20 characters"),
}).refine((data) => data.password === data.confirmPassword, {
  path: ["confirmPassword"],
  message: "Passwords do not match"
});

export type SignupFormData = z.infer<typeof signupSchema>;