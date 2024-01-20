import type { ImageEntity } from "../entities";

export abstract class RandomImageRepository {
  abstract get(): ImageEntity | Promise<ImageEntity>;
  abstract get default(): string;
}
