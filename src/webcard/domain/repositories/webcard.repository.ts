import type { WebCardEntity } from "../entities";

export abstract class WebCardRepository {
  abstract getAll(): Promise<WebCardEntity[]>;
  abstract create(): Promise<WebCardEntity>;
  abstract delete(): Promise<WebCardEntity>;
}
