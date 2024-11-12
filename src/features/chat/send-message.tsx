"use client";

import { sendMessageAction } from "./actions";

export function SendMessage() {
  async function onSendMessage() {
    console.log("Inside onSend");

    await sendMessageAction({ content: "Hi!" });
  }

  return (
    <button className="btn btn-primary" onClick={onSendMessage}>
      Send
    </button>
  );
}
