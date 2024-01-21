import type { WebCardRepository } from "..";

export class GetAllWebCardsUseCase {
  constructor(private readonly webcardRepository: WebCardRepository) {}

  execute() {
    return this.webcardRepository.getAll();
  }
}
