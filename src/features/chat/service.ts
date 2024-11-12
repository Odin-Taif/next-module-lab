import { Repository } from "./repository";
import { Message } from "./types";

export function createService(repository: Repository) {
  return {
    async getAllMessages() {
      return repository.getAllMessages();
    },
    async sendMessage(message: Message) {
      return repository.sendMessage(message);
    },
  };
}
