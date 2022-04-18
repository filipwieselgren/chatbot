import { loadBotImg } from "./loadbotimg";
import { startBot } from "./startbot";

export const closeBot = () => {
  const removeChatBox: HTMLDivElement = document.querySelector(
    ".chat-box"
  ) as HTMLDivElement;

  const removeMainContainer: HTMLDivElement = document.querySelector(
    ".main-container"
  ) as HTMLDivElement;

  removeChatBox.remove();

  removeMainContainer.remove();

  loadBotImg();
  startBot();
};
