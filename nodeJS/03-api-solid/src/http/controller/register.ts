import { FastifyRequest, FastifyReply } from "fastify";
import { z } from "zod";
import { registerUseCase } from "@/use-case/register";

export async function register(request: FastifyRequest, reply: FastifyReply) {
  const registerBodySchema = z.object({
    name: z.string(),
    email: z.string(),
    password: z.string().min(6),
  });

  const { name, email, password } = registerBodySchema.parse(request.body);

  try {
    await registerUseCase({
      name,
      email,
      password,
    });
  } catch (error) {
    reply.status(409).send();
  }

  reply.status(201).send();
}
