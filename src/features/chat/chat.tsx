"use server";

import { chatFeature } from "./instance";
import { SendMessage } from "./send-message";

export async function Chat() {
  const messages = await chatFeature.service.getAllMessages();

  return (
    <>
      <SendMessage />
      <div>
        {messages.map((message, index) => {
          return <div key={index}>{message.content}</div>;
        })}
      </div>
    </>
  );
}
