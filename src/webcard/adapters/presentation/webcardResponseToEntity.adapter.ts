import type { WebCardEntity, WebcardResponse } from "../../domain";

export const webcardResponseToEntityAdapter = (
  response: WebcardResponse
): WebCardEntity[] | WebCardEntity => {
  return response.webcards
    ? response.webcards?.map((webcard) => ({
        id: webcard.id!,
        imageUrl: webcard.image!,
        name: webcard.name!,
        url: webcard.url!,
        colors: {
          primary: webcard.colors.primary!,
          secondary: webcard.colors.secondary!
        }
      }))
    : {
        id: response.webcard?.id!,
        imageUrl: response.webcard?.image!,
        name: response.webcard?.name!,
        url: response.webcard?.url!,
        colors: {
          primary: response.webcard?.colors.primary!,
          secondary: response.webcard?.colors.secondary!
        }
      };
};
