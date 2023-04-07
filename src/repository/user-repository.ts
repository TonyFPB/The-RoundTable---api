import { prisma } from "../config";

async function findUserByName(name: string) {
  return prisma.user.findMany({
    where: {
      name: { contains: name }
    },
    select: {
      name: true
    },
    orderBy:{ name:"asc" }
  });
}

const userRepository = {
  findUserByName
};

export { userRepository };
