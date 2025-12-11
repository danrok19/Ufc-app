import z from "zod";

export const followSchema = z.object({

    userId: z.string({error: 'Valid user required'}),
    fighterName: z.string({error: 'Valid fighter required'})
})
export type FollowSchema = z.infer<typeof followSchema>;