import dotenv from "dotenv";
import { TemplateBodyRequest } from "./template-dto";
import {
  createUserRepository,
  getUsersCountRepository,
  getUsersRepository,
} from "./template-repository";
import { Query } from "../../interface/query";
import { getUserDTOMapper } from "./template-mapper";
import { Meta } from "../../utils/meta";

dotenv.config();

export const createUserService = async (data: TemplateBodyRequest) => {
  const user = await createUserRepository(data);

  return user;
};

export const getUsersService = async (query: Query) => {
  const { page = "1", perPage = "10" } = query;
  const [user, count] = await Promise.all([
    getUsersRepository(query),
    getUsersCountRepository(query),
  ]);
  const meta = Meta(Number(page), Number(perPage), Number(count));
  return {
    data: getUserDTOMapper(user),
    meta,
  };
};
