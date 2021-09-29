import { IMessage } from "../providers/IMailProvider";
import { MailtrapMailProvider } from "../providers/implementations/MailtrapMailProvider";
import { IMailAdapter } from "./IMailAdapter";

export class SendMailAdapter extends MailtrapMailProvider implements IMailAdapter {

  constructor() {
    super();
  }

  async sendMail(message: IMessage): Promise<void> {
    this.send(message);
  }
}