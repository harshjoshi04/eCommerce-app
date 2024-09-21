import z from 'zod'

export const SignUpSchema = z.object({
    userName: z.string().min(1, { message: "Please enter UserName" }),
    email: z.string().email({ message: "Please enter valid email" }),
    password: z.string(),
    comfirmPassword: z.string()
}).superRefine(({ comfirmPassword, password }, ctx) => {
    if (comfirmPassword !== password) {
        ctx.addIssue({
            code: "custom",
            message: "Password is not match",
            path: ['comfirmPassword']
        })
    }
})


export const SignInSchema = z.object({
    email: z.string().email(),
    password: z.string()
})