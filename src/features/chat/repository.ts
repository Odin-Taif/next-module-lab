import { Message } from "./types";

export function createRepository() {
  let data: Message[] = [];

  return {
    async getAllMessages() {
      return data;
    },
    async sendMessage(message: Message) {
      await data.push(message);
    },
  };
}

export type Repository = ReturnType<typeof createRepository>;
