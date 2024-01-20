import type { RandomImageRepository } from "../repositories";

export class GetRandomImageUseCase {
  constructor(private readonly randomImageRepository: RandomImageRepository) {}

  execute() {
    return this.randomImageRepository.get();
  }
}
