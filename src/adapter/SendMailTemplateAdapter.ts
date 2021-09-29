import { IMessage } from "../providers/IMailProvider";
import { MailtrapMailProvider } from "../providers/implementations/MailtrapMailProvider";
import { IMailAdapter } from "./IMailAdapter";

export class SendMailTemplateAdapter extends MailtrapMailProvider implements IMailAdapter {

  constructor() {
    super();
  }

  async sendMail(message: IMessage): Promise<void> {
    message.body = 'get template aws'
    this.send(message);
  }
}