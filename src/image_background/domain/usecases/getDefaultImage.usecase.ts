import { RandomImageRepository } from "../repositories";

export class GetDefaultImageUseCase {
  constructor(private readonly randomImageRepository: RandomImageRepository) {}

  execute() {
    return this.randomImageRepository.default;
  }
}
