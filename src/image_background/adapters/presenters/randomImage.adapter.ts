import { environment } from "../../../environments/environments";
import type { ImageEntity } from "../../domain";

interface UnsplashUser {
  instagram?: string | null;
  twitter?: string | null;
  username?: string | null;
}

export interface ImageAdaptedEntity {
  alt: string;
  color: string;
  url: string;
  user: UnsplashUser;
}

export const RandomImageAdapter = (
  imageEntity: ImageEntity
): ImageAdaptedEntity => {
  return {
    alt: imageEntity.alt_description || "image",
    color: imageEntity.color || "#333333",
    url: imageEntity.urls?.regular || environment.unsplash.default_image,
    user: {
      instagram: imageEntity.user?.instagram_username,
      twitter: imageEntity.user?.twitter_username,
      username: imageEntity.user?.username
    }
  };
};
