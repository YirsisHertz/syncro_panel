import type { CreateWebCard, WebCardRepository } from "..";

export class CreateWebCardUseCase {
  constructor(private readonly webcardRepository: WebCardRepository) {}

  private isEmpty(value: string) {
    return value.trim() === "" || !value;
  }

  private validateCreateWebCardDatasource(datasource: CreateWebCard) {
    const { image, name, primary_color, secondary_color, url } = datasource;

    if (
      this.isEmpty(image) ||
      this.isEmpty(name) ||
      this.isEmpty(primary_color) ||
      this.isEmpty(secondary_color) ||
      this.isEmpty(url)
    )
      throw new Error("All inputs is required");
  }

  execute(datasource: CreateWebCard) {
    this.validateCreateWebCardDatasource(datasource);

    return this.webcardRepository.create(datasource);
  }
}
