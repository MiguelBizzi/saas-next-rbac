import { roleSchema } from '../roles'
import { z } from 'zod'

const userSchema = z.object({
  role: roleSchema,
})

export type User = z.infer<typeof userSchema>
