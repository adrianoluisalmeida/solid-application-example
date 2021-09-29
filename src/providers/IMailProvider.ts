interface IAddress {
  email: string;
  name: string;
}

export interface IMessage {
  to: IAddress;
  from: IAddress;
  subject: string;
  body: string;
}

export interface IMailProvider {
  send(message: IMessage): Promise<void>;
  receive?: (message: IMessage) => Promise<IMessage>;  //Clientes não devem ser forçados a implementar métodos os quais não utilizam
}