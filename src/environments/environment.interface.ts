interface Unsplash {
  application_id: number;
  access_key: string;
  secret_key: string;
  default_image: string;
}

export interface Environment {
  unsplash: Unsplash;
  webcard_base_url: string;
}
