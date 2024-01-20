import type { WebCardEntity } from "../../domain";
import { WebCardRepository } from "../../domain";

export class WebCardMongoModel extends WebCardRepository {
  getAll(): Promise<WebCardEntity[]> {
    throw new Error("Method not implemented.");
  }
  create(): Promise<WebCardEntity> {
    throw new Error("Method not implemented.");
  }
  delete(): Promise<WebCardEntity> {
    throw new Error("Method not implemented.");
  }
}
