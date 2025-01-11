import { User } from "@prisma/client";
import { TemplateDTO } from "./template-dto";

export const getUsersDTOMapper = (data: User[]): TemplateDTO[] => {
  return data.map((item) => ({
    id: item.id,
    name: item.name,
    email: item.email,
  }));
};

export const getUserDTOMapper = (data: User[]): TemplateDTO[] => {
  return data.map((item) => ({
    id: item.id,
    name: item.name,
    email: item.email,
  }));
};
