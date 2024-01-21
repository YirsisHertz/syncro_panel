import type { CreateWebCard } from "../../domain";

export interface CreateWebCardForm {
  imageUrl: string;
  name: string;
  url: string;
  colors: {
    primary: string;
    secondary: string;
  };
}

export const createWebCardDatasourceAdapter = (
  form: CreateWebCardForm
): CreateWebCard => {
  return {
    image: form.imageUrl,
    name: form.name,
    primary_color: form.colors.primary,
    secondary_color: form.colors.secondary,
    url: form.url
  };
};
