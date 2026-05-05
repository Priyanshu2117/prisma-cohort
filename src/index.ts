import { prisma } from "./lib/prisma.js";

interface UpdateParams {
  firstName: string;
  lastName: string;
}

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
    select: {
      //use to select what field do we need to return
      id: true,
      email: true,
    },
  });

  console.log(res);
}

async function updateUser(
  username: string,
  { firstName, lastName }: UpdateParams,
) {
  const res = await prisma.user.update({
    where: { email: username },
    data: {
      firstName,
      lastName,
    },
  });

  console.log(res);
}

const getUserDetails = async (username: string) => {
  const res = await prisma.user.findFirst({
    where: { email: username },
  });

  console.log("getData", res);
};

// insertUser("Priyanshu", "saxena", "saxena@gmail.com", "Amway@123456");
const updatePayload = {
  firstName: "Saxe",
  lastName: "Priyanshu ",
};
updateUser("saxena@gmail.com", updatePayload);
getUserDetails("saxena@gmail.com");
