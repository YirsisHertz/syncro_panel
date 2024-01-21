import type { WebCardEntity } from "../entities";
import type {
  CreateWebCard,
  WebcardResponse
} from "./../entities/webcard.entity";

export abstract class WebCardRepository {
  abstract getAll(): Promise<WebCardEntity[] | WebcardResponse>;
  abstract create(
    datasource: CreateWebCard
  ): Promise<WebCardEntity | WebcardResponse>;
  abstract delete(): Promise<WebCardEntity | WebcardResponse>;
}
