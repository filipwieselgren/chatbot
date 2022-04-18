import { loadBotImg } from "./loadbotimg";
import { startBot } from "./startbot";

export const closeBot = () => {
  const removeChatBox: HTMLDivElement = document.querySelector(
    ".chat-box"
  ) as HTMLDivElement;

  removeChatBox.remove();

  const removeMainContainer: HTMLDivElement = document.querySelector(
    ".main-container"
  ) as HTMLDivElement;
  removeMainContainer.remove();

  // const removeSendMsgBtn: HTMLButtonElement = document.querySelector(
  //   ".send-message-btn"
  // ) as HTMLButtonElement;

  loadBotImg();
  startBot();
};
