import { prisma } from "./lib/prisma.js";
async function insertUser(firstName, lastName, email, password) {
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
async function updateUser(username, { firstName, lastName }) {
    const res = await prisma.user.update({
        where: { email: username },
        data: {
            firstName,
            lastName,
        },
    });
    console.log(res);
}
const getUserDetails = async (username) => {
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
//# sourceMappingURL=index.js.map