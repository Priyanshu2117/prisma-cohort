import { prisma } from "./lib/prisma.js";

async function insertUser(
  firstName: string,
  lastName: string,
  email: string,
  password: string,
) {
  const res = await prisma.user.create({
    data: {
      email: email,
      firstName,
      lastName,
      password,
    },
  });

  console.log(res);
}
