interface WebCardColors {
  primary: string;
  secondary: string;
}

export interface WebCardEntity {
  id: string;
  name: string;
  imageUrl: string;
  url: string;
  colors: WebCardColors;
}

export interface CreateWebCard {
  name: string;
  image: string;
  url: string;
  primary_color: string;
  secondary_color: string;
}

interface WebCardResponseColors {
  primary: string;
  secondary: string;
}

interface WebCardResponseEntity {
  id: string;
  name: string;
  image: string;
  url: string;
  colors: WebCardResponseColors;
}

export interface WebcardResponse {
  message: string;
  webcards?: WebCardResponseEntity[];
  webcard?: WebCardResponseEntity;
}
