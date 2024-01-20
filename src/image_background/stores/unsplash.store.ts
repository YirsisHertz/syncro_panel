import { defineStore } from "pinia";
import { RandomImageAdapter } from "../adapters/presenters/randomImage.adapter";
import { UnsplashRandomImageModel } from "../datasources/models/unsplashRandomImage.model";
import { GetRandomImageUseCase } from "../domain";
import { GetDefaultImageUseCase } from "../domain/usecases/getDefaultImage.usecase";

const unsplashRandomImageModel = new UnsplashRandomImageModel();

export const useUnsplashStore = defineStore("unsplashStore", () => {
  const getRandomImage = async () => {
    const imageEntity = await new GetRandomImageUseCase(
      unsplashRandomImageModel
    ).execute();

    const imageEntityAdapted = RandomImageAdapter(imageEntity);

    return imageEntityAdapted;
  };

  const getDefaultImage = () => {
    const imageEntity = new GetDefaultImageUseCase(
      unsplashRandomImageModel
    ).execute();

    return imageEntity;
  };

  return { getDefaultImage, getRandomImage };
});
