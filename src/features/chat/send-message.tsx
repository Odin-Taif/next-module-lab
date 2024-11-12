"use client";

import { sendMessageAction } from "./actions";
import { Message } from "./types";

export function SendMessage() {
  return (
    <>
      <form
        action={(formData: FormData) => {
          const message: Message = {
            content: formData.get("content") as string,
          };
          return sendMessageAction(message);
        }}
      >
        <input type="text" name="content" required />
        <button type="submit" className="btn btn-primary">
          Send
        </button>
      </form>
    </>
  );
}
