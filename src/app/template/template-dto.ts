export interface TemplateDTO {
  id?: string;
  name?: string;
  email: string;
}

export interface TemplateBodyRequest {
  name: string;
  email: string;
  password: string;
}