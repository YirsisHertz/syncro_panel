import { defineStore } from "pinia";
import { webcardResponseToEntityAdapter } from "../adapters/presentation/webcardResponseToEntity.adapter";
import { WebCardMongoModel } from "../datasources/models/webcard.model";
import type { CreateWebCard, WebcardResponse } from "../domain";
import { GetAllWebCardsUseCase } from "../domain/usecases/getAllWebCards.usecase";
import { CreateWebCardUseCase } from "./../domain/usecases/createWebCard.usecase";

const webcardMongoModel = new WebCardMongoModel();

export const useWebCardStore = defineStore("webcardStore", () => {
  const getAllWebCards = async () => {
    const webcards: WebcardResponse = (await new GetAllWebCardsUseCase(
      webcardMongoModel
    ).execute()) as WebcardResponse;

    const data = webcardResponseToEntityAdapter(webcards);

    return data;
  };

  const createWebCards = async (datasource: CreateWebCard) => {
    const webcard: WebcardResponse = (await new CreateWebCardUseCase(
      webcardMongoModel
    ).execute(datasource)) as WebcardResponse;

    const data = webcardResponseToEntityAdapter(webcard);

    return data;
  };

  return { getAllWebCards, createWebCards };
});
