"use server";

import { chatFeature } from "./instance";
import { SendMessage } from "./send-message";

export async function Chat() {
  const messages = await chatFeature.service.getAllMessages();

  return (
    <>
      <SendMessage />
      <div>Messages: {JSON.stringify(messages, null, 2)}</div>
    </>
  );
}
