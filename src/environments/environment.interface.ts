interface Unsplash {
  application_id: number
  access_key: string
  secret_key: string
}

export interface Environment {
  unsplash: Unsplash
}
