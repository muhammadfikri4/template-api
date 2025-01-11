import { prisma } from "../../config";
import { Query } from "../../interface/query";
import { queryPagination } from "../../utils/query-pagination";
import { TemplateBodyRequest } from "./template-dto";

export const createUserRepository = async (data: TemplateBodyRequest) => {
  return await prisma.user.create({
    data,
  });
};

export const getUserRepository = async (userId: string) => {
  return await prisma.user.findFirst({
    where: {
      id: userId,
    },
  });
};

export const getUsersRepository = async (query: Query) => {
  const { search } = query;
  return await prisma.user.findMany({
    where: {
      name: {
        contains: search,
      },
    },
    ...queryPagination(query),
  });
};

export const getUsersCountRepository = async (query: Query) => {
  const { search } = query;
  return await prisma.user.count({
    where: {
      name: {
        contains: search,
      },
    },
    ...queryPagination(query),
  });
};
