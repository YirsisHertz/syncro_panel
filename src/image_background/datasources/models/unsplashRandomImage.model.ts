import { environment } from "../../../environments/environments";
import { RandomImageRepository, type ImageEntity } from "../../domain";

export class UnsplashRandomImageModel extends RandomImageRepository {
  private readonly baseURL = "https://api.unsplash.com";
  private readonly key = `?client_id=${environment.unsplash.access_key}`;

  async get(): Promise<ImageEntity> {
    const res = await fetch(`${this.baseURL}/photos/random${this.key}`);

    const image = await res.json();

    return image;
  }

  get default(): string {
    return environment.unsplash.default_image;
  }
}
