import { IMailAdapter } from "../../adapter/IMailAdapter";
import { User } from "../../entities/User";
import { IMailProvider } from "../../providers/IMailProvider";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { ICreateUserRequestDTO } from "./createUserDto";

// Single responsability principle -> classe ÚNICA responsabilidade, que é cadastrar usuário, caso n exista.
export class CreateUserUsecase {
  constructor ( 
    private usersRepository: IUsersRepository,
    //Liskov -> Contrato (IUsersRepository) com os metodos definidos que vão existir. ñ importa o banco que está sendo usado
    //Dependency -> Não depende diretamente da implementação direta. Apenas da abstração,
    private mailProviderAdapter: IMailAdapter
  ) {}

  async execute(data: ICreateUserRequestDTO) {
    const userAlreadyExists = await this.usersRepository.findByEmail(data.email);

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }

    const user = new User(data);

    await this.usersRepository.save(user);

    await this.mailProviderAdapter.sendMail({
      to: {
        name: data.name,
        email: data.email,
      },
      from: {
        name: data.name,
        email: data.email,
      },
      subject: 'subject',
      body: 'body'
    })
  }
}