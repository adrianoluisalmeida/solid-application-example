import { SendMailAdapter } from "../../adapter/SendMailAdapter";
import { SendMailTemplateAdapter } from "../../adapter/SendMailTemplateAdapter";
import { MailtrapMailProvider } from "../../providers/implementations/MailtrapMailProvider";
import { PostgresUsersRepository } from "../../repositories/implementations/PostgresUsersRepository";
import { CreateUserController } from "./createUserController";
import { CreateUserUsecase } from "./createUserUsecase";

//OCP
const mailTemplateAdapter = new SendMailTemplateAdapter()
// const mailAdapter = new SendMailAdapter()

const postgresUsersRepository = new PostgresUsersRepository()

const createUserUsecase = new CreateUserUsecase(
  postgresUsersRepository,
  mailTemplateAdapter,
)

const createUserController = new CreateUserController(
  createUserUsecase
)

export { createUserUsecase, createUserController }