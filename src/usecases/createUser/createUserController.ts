import { Request, Response } from 'express';
import { CreateUserUsecase } from './createUserUsecase';

export class CreateUserController {

  constructor(
    private createUserUsecase: CreateUserUsecase
  ) {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;

    try {
      await this.createUserUsecase.execute({
        name,
        email,
        password
      });

      return response.status(201).send();
    } catch(err) {
      return response.status(400).json({
        message: err.message || 'Unexpected error.'
      });
    }
  }
}