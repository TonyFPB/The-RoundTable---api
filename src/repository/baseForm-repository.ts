import { prisma } from "../config";

async function createForm(form: object) {
  return prisma.baseForm.create({
    data:{
      form
    }
  });
}

async function findFormById(id: number) {
  return prisma.baseForm.findFirst({
    where:{
      id
    }
  })
}

const baseFormRepository = {
  createForm,
  findFormById
};

export { baseFormRepository };
