import { z } from 'zod'

const passwordValidation = new RegExp (
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,128}$/
);

export const userRegisterSchema = z.object({
    email: z
        .string()
        .email({ message: "Please enter a valid email address." 
        }),
    password: z
        .string()
        .min(8, {message: "Password must be at least 8 characters long."})
        .max(128, {message: "Password cannot exceed 128 characters."})
        .regex(passwordValidation, {
            message: "Password must include at least one uppercase letter, one lowercase letter, one number, and one special character."
        }),
    confirmPassword: z
        .string()
        .min(1, {message: "Please confirm your password."}),
}).superRefine(({ confirmPassword, password}, ctx) => {
    if(password !== confirmPassword){
        ctx.addIssue({
            code: "custom",
            message: "The passwords do not match. Please re-enter them to ensure they are identical.",
            path: ["confirmPassword"]
        })
    }
});

export interface UserRegisterSchema extends z.infer<typeof userRegisterSchema> {}