import { z } from 'zod'

const envSchema = z.object({
  NODE_ENV: z.enum(['dev','test','production']).default('production'),
  PORT: z.coerce.number().default(3333)
})

const _env = envSchema.safeParse(process.env)

if(_env.success === false){
  console.error('⚠️ invalid environment variables')

  throw new Error('Invalid environment variables')
}

export const env = _env.data