import { prisma } from "@/lib/prisma";
import { PrismaUsersRepository } from "@/repository/prisma-user-repository";
import { hash } from "bcryptjs";

interface registerUseCaseParams {
  name: string;
  email: string;
  password: string;
}

export async function registerUseCase({
  name,
  email,
  password,
}: registerUseCaseParams) {
  const password_hash = await hash(password, 6);

  const userWithSameEmail = await prisma.user.findUnique({
    where: {
      email,
    },
  });

  if (userWithSameEmail) {
    throw new Error("Email already exist");
  }

  const prismaUserRepository = new PrismaUsersRepository();

  await prismaUserRepository.create({ name, email, password_hash });
}
